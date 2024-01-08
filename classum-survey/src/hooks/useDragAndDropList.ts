import { useRef } from "react";

type DataType = {
  id: number;
};

interface useDragAndDropListProp {
  containerRef: React.RefObject<HTMLDivElement>;
  data: Array<DataType>;
  handleDataChange: (newData: Array<DataType>) => void;
}

function useDragAndDropList({
  containerRef,
  data,
  handleDataChange,
}: useDragAndDropListProp) {
  const goDrag = useRef<boolean>(false);
  const draggedItemId = useRef<number>(-1);
  const items = useRef<
    Array<{
      id: number;
      element: HTMLElement;
      initOffsetTop: number;
      initOffsetBottom: number;
    }>
  >([]);
  let prevDragIndicatorPosY: number;

  const getOffsetPos = (el: HTMLElement) => {
    return {
      offsetTop: el.offsetTop,
      offsetBottom: el.offsetTop + el.offsetHeight,
    };
  };

  const handleGoDrag = (go: boolean) => {
    goDrag.current = go;
  };

  const handleDragStart = (e: React.DragEvent, id: number) => {
    if (!goDrag.current) return;

    // drag ghost image 제거
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    // drag 시 마우스 +아이콘 제거
    e.dataTransfer.effectAllowed = "move";

    // drag 되고 있는 item 기록
    draggedItemId.current = id;

    // container 내 모든 items의 offsetTop, offsetBottom 위치 구하기
    const containerEl = containerRef.current;
    const itemsEl = containerEl?.querySelectorAll(".draggable-item");
    if (!itemsEl) return;

    items.current = [...itemsEl].map((el, idx) => {
      const element = el as HTMLElement;
      const { offsetTop: initOffsetTop, offsetBottom: initOffsetBottom } =
        getOffsetPos(itemsEl[idx] as HTMLElement);

      return {
        id: Number(element.dataset.id),
        element,
        initOffsetTop,
        initOffsetBottom,
      };
    });

    // 초깃값 설정
    prevDragIndicatorPosY = e.pageY;
  };

  const handleDrag = (e: React.DragEvent) => {
    if (!goDrag.current) return;

    const dragTarget = e.target as HTMLElement;

    const container = dragTarget.offsetParent as HTMLElement;
    if (!container) return;

    // 현재 위치 값, 차이 값(이동 거리) 계산
    const currentDragIndicatorPosY = e.pageY;
    const dragIndicatorMove = currentDragIndicatorPosY - prevDragIndicatorPosY;

    const {
      offsetTop: currentDragTargetPosTop,
      offsetBottom: currentDragTargetPosBottom,
    } = getOffsetPos(dragTarget);

    const finalDragTargetPosTop = currentDragTargetPosTop + dragIndicatorMove;
    const finalDragTargetPosBottom =
      currentDragTargetPosBottom + dragIndicatorMove;

    // container 범위 내에서만 item 이동 가능
    const isOverTopLimit = finalDragTargetPosTop < 0; // 상한선
    const isOverBottomLimit = finalDragTargetPosBottom > container.offsetHeight; // 하한선

    if (isOverTopLimit || isOverBottomLimit) return;
    else {
      // 약간 투명하게 스타일 변경
      dragTarget.style.opacity = "0.7";

      // 박스 그림자 추가
      dragTarget.style.boxShadow = "0.3rem 0.3rem 0.5rem 0.1rem #E0E0E0";

      // drag 정도에 따라 화면 상에서 이동시키기
      dragTarget.style.top = `${
        parseInt(dragTarget.style.top || "0") + dragIndicatorMove
      }px`;
      dragTarget.style.zIndex = "100";
      prevDragIndicatorPosY = currentDragIndicatorPosY;
    }

    // 현재 drag item
    const currentId = draggedItemId.current;
    const currentIdx = items.current.findIndex((item) => item.id === currentId);
    const currentItem = items.current[currentIdx];
    if (!currentItem) return;

    // 아래 item을 넘은 경우
    const nextItem = items.current[currentIdx + 1];
    if (nextItem && finalDragTargetPosBottom >= nextItem.initOffsetBottom) {
      // 아래 item을 위로 올리기
      const move = currentItem.initOffsetTop - nextItem.initOffsetTop;
      nextItem.element.style.top = `${move}px`;

      // items 순서 수정
      items.current = [
        ...items.current.slice(0, currentIdx),
        {
          ...nextItem,
          initOffsetTop: currentItem.initOffsetTop,
          initOffsetBottom:
            currentItem.initOffsetTop + nextItem.element.offsetHeight,
        },
        {
          ...currentItem,
          initOffsetTop:
            nextItem.initOffsetBottom - currentItem.element.offsetHeight,
          initOffsetBottom: nextItem.initOffsetBottom,
        },
        ...items.current.slice(currentIdx + 2),
      ];
    }

    // 위 item을 넘은 경우
    const prevItem = items.current[currentIdx - 1];
    if (prevItem && finalDragTargetPosTop <= prevItem.initOffsetTop) {
      // 위 item을 아래로 내리기
      const move = currentItem.initOffsetBottom - prevItem.initOffsetBottom;
      prevItem.element.style.top = `${move}px`;

      // items 순서 수정
      items.current = [
        ...items.current.slice(0, currentIdx - 1),
        {
          ...currentItem,
          initOffsetTop: prevItem.initOffsetTop,
          initOffsetBottom:
            prevItem.initOffsetTop + currentItem.element.offsetHeight,
        },
        {
          ...prevItem,
          initOffsetTop:
            currentItem.initOffsetBottom - prevItem.element.offsetHeight,
          initOffsetBottom: currentItem.initOffsetBottom,
        },
        ...items.current.slice(currentIdx + 1),
      ];
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnd = (e: React.DragEvent) => {
    if (!goDrag.current) return;

    const dragTarget = e.target as HTMLElement;

    // 투명성 초기화
    dragTarget.style.opacity = "1";

    // 박스 그림자 초기화
    dragTarget.style.boxShadow = "none";

    // z-index 초기화
    dragTarget.style.zIndex = "0";

    // state 변경
    const newItem = items.current.map((item) => {
      const newData = data.find(
        (dataItem) => dataItem.id === item.id
      ) as DataType;
      return newData;
    });

    handleDataChange(newItem);

    // 전체 items의 top 초기화
    items.current.forEach((item) => (item.element.style.top = "0"));

    // drag item 초기화
    draggedItemId.current = -1;

    // items 초기화
    items.current = [];
  };

  return {
    handleGoDrag,
    handleDragStart,
    handleDrag,
    handleDragOver,
    handleDragEnd,
  };
}

export default useDragAndDropList;
