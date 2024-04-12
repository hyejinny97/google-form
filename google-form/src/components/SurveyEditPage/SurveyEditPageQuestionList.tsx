import { useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, QuestionType } from "@stores";
import { reorderQuestions } from "@stores";
import {
  SurveyEditPageQuestionBox,
  DragContainer,
  DragTarget,
} from "@components";
import { useDragAndDropList } from "@hooks";

type DataType = {
  id: number;
};

function SurveyEditPageQuestionList() {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.survey.questions);

  const dragItems = useRef<Array<HTMLDivElement>>([]);
  const {
    handleGoDrag,
    handleDragStart,
    handleDrag,
    handleDragOver,
    handleDragEnd,
  } = useDragAndDropList({
    dragItemsRef: dragItems,
    data: questions,
    handleDataChange: (newData: Array<DataType>) =>
      dispatch(reorderQuestions(newData as Array<QuestionType>)),
  });

  const memoizedHandleGoDrag = useCallback(handleGoDrag, []);

  return (
    <DragContainer>
      {questions.map((question, idx) => {
        return (
          <DragTarget
            key={question.id}
            ref={(el: HTMLDivElement) => (dragItems.current[idx] = el)}
            targetId={question.id}
            handleDragStart={handleDragStart}
            handleDrag={handleDrag}
            handleDragOver={handleDragOver}
            handleDragEnd={handleDragEnd}
          >
            <SurveyEditPageQuestionBox
              data={question}
              onGoDrag={memoizedHandleGoDrag}
            />
          </DragTarget>
        );
      })}
    </DragContainer>
  );
}

export default SurveyEditPageQuestionList;
