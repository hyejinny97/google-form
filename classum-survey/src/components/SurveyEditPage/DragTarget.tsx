import styled from "@emotion/styled";

interface DragTargetProps {
  targetId: number;
  handleDragStart: (e: React.DragEvent, id: number) => void;
  handleDrag: (e: React.DragEvent) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragEnd: (e: React.DragEvent) => void;
  children: React.ReactNode;
}

const Target = styled.div`
  position: relative;
`;

function DragTarget({
  targetId,
  handleDragStart,
  handleDrag,
  handleDragOver,
  handleDragEnd,
  children,
}: DragTargetProps) {
  return (
    <Target
      className="draggable-item"
      data-id={targetId}
      draggable
      onDragStart={(e: React.DragEvent) => handleDragStart(e, targetId)}
      onDrag={handleDrag}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {children}
    </Target>
  );
}

export default DragTarget;
