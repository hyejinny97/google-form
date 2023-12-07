import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Container } from "@mui/material";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </StyledApp>
  );
}

export default App;
