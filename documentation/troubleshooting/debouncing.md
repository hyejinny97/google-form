### 🔹 Debouncing

> 참고: [리액트 디바운싱](https://velog.io/@tjdud0123/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8B%B1-%EA%B0%84%EB%8B%A8-%EA%B5%AC%ED%98%84-react-debounce)<br />
> 참고: [리덕스 사가 이해하기](https://simsimjae.medium.com/%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%82%AC%EA%B0%80-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-8e573de9786e)<br />
> 참고: [리덕스 사가로 디바운스 구현하기](https://github.com/hyejinny97/TIL/blob/master/Redux/redux_saga.md#-%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%82%AC%EA%B0%80%EB%A1%9C-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0) <br />
> 참고: [redux-saga takeLatest 함수](https://react.vlpt.us/redux-middleware/10-redux-saga.html)<br />

survey edit page에서 question box의 input 값을 수정할 때마다 redux store로 dispatch를 보낸 후 변경된 state를 다시 받아와 input 태그의 value 값으로 두었다. 만약 이 상황에서 빠르게 글자를 입력하게 된다면 연이어 redux store로 dispatch를 보내게 되는데, 변경된 state가 input 태그의 value 값으로 전달되는 속도보다 입력 속도가 빠르다보니 화면에 변화가 느리게 반영되는 이슈가 발생했다.

```js
import { updateSurveyTitle } from "@stores";

function SurveyEditPageTitleBox() {
  const surveyTitle = useSelector(
    (state: RootState) => state.survey.surveyTitle
  );
  const dispatch = useDispatch();

  const handleSurveyTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSurveyTitle(e.target.value));
  };

  return (
    <SurveyTitleBox>
      <TextField
        value={surveyTitle}
        onChange={handleSurveyTitleChange}
        variant="standard"
        fullWidth
        InputProps={{ sx: { fontSize: TITLE_BOX_TITLE_FONT_SIZE } }}
      />
    </SurveyTitleBox>
  );
}

export default SurveyEditPageTitleBox;
```

이를 해결하기 위해, 차라리 input 값을 redux store로 관리하는 것보다 컴포넌트 내에서 `useState()`를 사용해 로컬로 관리해야겠다고 생각했다. 그리고, 이 입력값이 다른 컴포넌트에서도 사용되어야하기 때문에 전역 상태로 관리해야할 필요가 있어서 반드시 redux store에도 저장해야 했다. 따라서, input 태그에서 change event가 일어날 때 실행시킬 handler function 내부에서 setter function을 실행시켜주어 로컬 state를 변경시켜 줄뿐만 아니라 redux store로 dispatch를 보내게 수정했다.

```js
function SurveyEditPageTitleBox() {
  const initialSurveyTitle = useSelector(
    (state: RootState) => state.survey.surveyTitle
  );
  const [surveyTitleText, setSurveyTitleText] = useState(initialSurveyTitle);
  const dispatch = useDispatch();

  const handleSurveyTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSurveyTitle(e.target.value));
    setSurveyTitleText(e.target.value);
  };

  return (
    <SurveyTitleBox>
      <TextField
        value={surveyTitleText}
        onChange={handleSurveyTitleChange}
        variant="standard"
        fullWidth
        InputProps={{ sx: { fontSize: TITLE_BOX_TITLE_FONT_SIZE } }}
      />
    </SurveyTitleBox>
  );
}
```

이제, 입력란에 빠르게 글자를 입력했을 때 화면에 바로 반영되는 것을 확인할 수 있었다. 하지만, 여전히 redux store에 불필요하게 많은 dispatch를 보내어 reducer를 실행시키고 있었다. 이를 해결하기 위해서, Debounce 개념을 떠올리게 되었고 이를 적용하기 위해 `redux-saga` 라이브러리를 사용하게 되었다.

```js
// stores/actions/surveyActions.ts
import { createAction } from "@reduxjs/toolkit";
import { surveySlice } from "../slices";

const stateName = surveySlice.name;

const tryUpdateSurveyTitle =
  createAction < string > `${stateName}/tryUpdateSurveyTitle`;
```

```js
// stores/sagas/surveySaga.ts
import { debounce, put } from "redux-saga/effects";

function* tryUpdateSurveyTitleSaga(action: PayloadAction<string>) {
  yield put(updateSurveyTitle(action.payload));
}

export function* surveySaga() {
  yield debounce(1000, tryUpdateSurveyTitle, tryUpdateSurveyTitleSaga);
}
```

```js
function SurveyEditPageTitleBox() {
  // ...
  const handleSurveyTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(tryUpdateSurveyTitle(e.target.value)); // updateSurveyTitle → tryUpdateSurveyTitle로 변경
    setSurveyTitleText(e.target.value);
  };
  // ...
}
```

위에서처럼, 'tryUpdateSurveyTitle'이라는 action creator function을 새로 만들고 이 함수의 호출을 감지하는 surveySaga를 만들었다. `debounce()` 함수에 의해 'tryUpdateSurveyTitle'이 연속으로 호출되는 경우 마지막 호출이 진행된지 1초가 지났을 때 비로소 'tryUpdateSurveyTitleSaga'가 실행되게 된다. 'tryUpdateSurveyTitleSaga' 내부에서는 'updateSurveyTitle' action을 redux store로 dispatch하도록 했다.

이로 인해, 불필요하게 redux store로 dispatch를 보내는 것을 방지할 수 있었다.
