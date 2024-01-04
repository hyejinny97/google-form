import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import type { RootState } from "@stores";
import { SurveyEditPageQuestionBox } from "@components";
import {
  CLASSNAME_HORIZONTAL_INDICATOR,
  CLASSNAME_QUESTION_BOX,
  CLASSNAME_QUESTION_BOXES_CONTAINER,
} from "@constants";

const Container = styled.div`
  position: relative;
`;

function SurveyEditPageQuestionList() {
  const questions = useSelector((state: RootState) => state.survey.questions);
  const draggedItemIdx = useRef<number>(-1);

  let prevDragIndicatorPosY: number;

  // const validateDrag = (e: React.DragEvent) => {
  // const dragIndicator = e.target as HTMLElement;
  // if (!dragIndicator.className.includes(CLASSNAME_HORIZONTAL_INDICATOR))
  //   return { dragTarget: null };

  // const dragTarget = dragIndicator.closest(
  //   `.${CLASSNAME_QUESTION_BOX}`
  // ) as HTMLElement;
  // if (!dragTarget) return { dragTarget: null };

  // return { dragTarget };
  // };

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    console.log("start");

    // drag ghost image 제거
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    // drag 시 마우스 +아이콘 제거
    e.dataTransfer.effectAllowed = "move";

    // drag 되고 있는 item 기록
    draggedItemIdx.current = idx;

    // 초깃값 설정
    prevDragIndicatorPosY = e.pageY;
  };

  const handleDrag = (e: React.DragEvent) => {
    console.log("drag");

    const dragTarget = e.target as HTMLElement;

    const container = dragTarget.offsetParent as HTMLElement;
    if (!container) return;

    // 현재 위치 값, 차이 값(이동 거리) 계산
    const currentDragIndicatorPosY = e.pageY;
    const dragIndicatorMove = currentDragIndicatorPosY - prevDragIndicatorPosY;

    const currentDragTargetPosTop = dragTarget.offsetTop;
    const currentDragTargetPosBottom =
      currentDragTargetPosTop + dragTarget.offsetHeight;

    // 상한선
    if (currentDragTargetPosTop + dragIndicatorMove < 0) return;

    // 하한선
    if (currentDragTargetPosBottom + dragIndicatorMove > container.offsetHeight)
      return;

    // drag 정도에 따라 화면 상에서 이동시키기
    dragTarget.style.top = `${
      parseInt(dragTarget.style.top || "0") + dragIndicatorMove
    }px`;
    dragTarget.style.zIndex = "100";
    prevDragIndicatorPosY = currentDragIndicatorPosY;

    // 약간 투명하게 스타일 변경
    dragTarget.style.opacity = "0.7";

    // 박스 그림자 추가
    dragTarget.style.boxShadow = "0.3rem 0.3rem 0.5rem 0.1rem #E0E0E0";
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    console.log("over");
    e.preventDefault();

    // drag 되지 않은 경우
    if (draggedItemIdx.current < 0) return;

    console.log(idx, e.target);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    console.log("end");

    const dragTarget = e.target as HTMLElement;

    // drag item 제거
    draggedItemIdx.current = -1;

    // 투명성 원래대로 돌려놓기
    dragTarget.style.opacity = "1";

    // 박스 그림자 삭제
    dragTarget.style.boxShadow = "none";
  };

  return (
    <Container className={CLASSNAME_QUESTION_BOXES_CONTAINER}>
      {questions.map((question, idx) => (
        <SurveyEditPageQuestionBox
          key={question.id}
          data={question}
          onDragStart={(e: React.DragEvent) => handleDragStart(e, idx)}
          onDrag={handleDrag}
          onDragOver={(e: React.DragEvent) => handleDragOver(e, idx)}
          onDragEnd={handleDragEnd}
        />
      ))}
    </Container>
  );
}

export default SurveyEditPageQuestionList;
