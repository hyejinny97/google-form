import { forwardRef } from "react";
import styled from "@emotion/styled";

interface DragContainer {
  children: React.ReactNode;
}

const Container = styled.div`
  position: relative;
`;

const DragContainer = forwardRef(function ({ children }: DragContainer, ref) {
  return (
    <Container ref={ref as React.RefObject<HTMLDivElement>}>
      {children}
    </Container>
  );
});

export default DragContainer;
