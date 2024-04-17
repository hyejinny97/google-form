### 🔹 새로고침 시, 데이터 유지

> 참고: [web storage - localStorage vs sessionStorage](https://ko.javascript.info/localstorage)<br />
> 참고: [Redux Docs - Middleware](https://lunit.gitbook.io/redux-in-korean/advanced/middleware)<br />
> 참고: [벨로퍼트 - 리덕스 미들웨어](https://react.vlpt.us/redux-middleware/)

web storage에는 localStorage와 sessionStorage 두 종류가 있다. 두 스토리지 객체는 동일한 프로퍼티와 메서드를 제공한다. 아래는 이러한 스토리지 객체에서 제공하는 프로퍼티와 메서드이다.

```plain
◾ setItem(key, value) 👉 키-값 쌍을 보관합니다.
◾ getItem(key) 👉 키에 해당하는 값을 받아옵니다.
◾ removeItem(key) 👉 키와 해당 값을 삭제합니다.
◾ clear() 👉 모든 것을 삭제합니다.
◾ key(index) 👉 인덱스(index)에 해당하는 키를 받아옵니다.
◾ length 👉 저장된 항목의 개수를 얻습니다.
```

localStorage와 sessionStorage의 차이점은 아래와 같다.

| localStorage                                                           | sessionStorage                                                       |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| origin이 같은 탭, 창 전체에서 공유됨                                   | origin이 같은 탭, iframe에서 공유됨                                  |
| 페이지를 새로고침해도 남아있음<br/>탭이나 브라우저를 종료해도 남아있음 | 페이지를 새로고침해도 남아있음<br/>탭이나 브라우저를 종료하면 사라짐 |

이 프로젝트에서는 페이지를 새로고침해도 데이터가 남아있게 하고, 탭이나 브라우저를 종료하면 사라지도록 하기 위해 localStorage가 아닌 sessionStorage를 사용해서 클라이언트에 설문조사 질문과 답변 데이터를 저장하고자 했다.

현재 설문조사의 질문과 답변 데이터는 redux store에 저장이 되고, 값을 변경할 때마다 dispatch를 보내 변경된 데이터를 저장하게 된다. 따라서, redux store에서 설문조사 질문과
답변 데이터가 변경될 때마다 sessionStorage에 저장되게끔 구현하고자 했다.

이를 구현하기 위해 redux store의 survey, surveyPreviewAnswer state를 변경시키는 action이 dispatch될 때마다 redux middleware에서 이를 감지해 storage에 데이터를 저장시키고자 했다.

```js
import { select } from "redux-saga/effects";
import type { RootState } from "@stores";
import { setSessionStorage } from "@utils";

function* setSessionStorageSaga(stateName: keyof RootState) {
  const state: RootState = yield select((state) => state);
  setSessionStorage(stateName, state[stateName]);
}
```

```js
import { takeEvery } from "redux-saga/effects";
import { setSessionStorageSaga } from "./setSessionStorageSaga";
import { surveyPreviewAnswerSlice } from "../slices";
import { updateSurveyPreviewAnswer } from "@stores";

const stateName = surveyPreviewAnswerSlice.name;

function* surveyPreviewAnswerSaga() {
  yield takeEvery(updateSurveyPreviewAnswer, setSessionStorageSaga, stateName);
}
```
