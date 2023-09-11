import "./App.css";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import SideRoutes from "./routers/routes";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Container
          className={open ? "sidebarInitial active" : "sidebarInitial"}
        >
          <Sidebar open={open} setOpen={setOpen}></Sidebar>
          <SideRoutes />
        </Container>
      </BrowserRouter>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  transition-duration: 300ms;
  &.active {
    grid-template-columns: 288px auto;
  }
`;

export default App;
