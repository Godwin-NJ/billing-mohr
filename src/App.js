import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Billing from "./components/Billing";
import Invitation from "./components/Invitation";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <MyRouterWrap>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/invitation" element={<Invitation />} />
        </Routes>
      </MyRouterWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const MyRouterWrap = styled.div`
  padding: 5px;
`;
export default App;
