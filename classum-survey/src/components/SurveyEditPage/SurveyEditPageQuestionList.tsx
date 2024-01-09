import { useRef } from "react";
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

  const container = useRef<HTMLDivElement>(null);
  const {
    handleGoDrag,
    handleDragStart,
    handleDrag,
    handleDragOver,
    handleDragEnd,
  } = useDragAndDropList({
    containerRef: container,
    data: questions,
    handleDataChange: (newData: Array<DataType>) =>
      dispatch(reorderQuestions(newData as Array<QuestionType>)),
  });

  return (
    <DragContainer ref={container}>
      {questions.map((question) => {
        return (
          <DragTarget
            key={question.id}
            targetId={question.id}
            handleDragStart={handleDragStart}
            handleDrag={handleDrag}
            handleDragOver={handleDragOver}
            handleDragEnd={handleDragEnd}
          >
            <SurveyEditPageQuestionBox
              data={question}
              onGoDrag={handleGoDrag}
            />
          </DragTarget>
        );
      })}
    </DragContainer>
  );
}

export default SurveyEditPageQuestionList;
