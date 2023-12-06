import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { GlobalStyles, Container } from "@mui/material";
import { globalStyles } from "@styles";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles styles={globalStyles} />
      <Container>
        <Outlet />
      </Container>
    </StyledApp>
  );
}

export default App;
