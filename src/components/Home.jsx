import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Wrapper>
      <h5>Home component</h5>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 50px auto;
  column-gap: 10px; */
  /* margin-left: 25vw; */
`;

export default Home;
