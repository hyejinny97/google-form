import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Container } from "@components";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();

  const StyledApp = styled.div`
    padding: 3rem 0;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.palette.grey[100]};
  `;

  return (
    <StyledApp>
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </StyledApp>
  );
}

export default App;
