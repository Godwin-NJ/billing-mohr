// import React, { useRef, useEffect, useState } from "react";
import { AiOutlineHeatMap } from "react-icons/ai";
import { RiLockPasswordLine, RiLogoutBoxRLine } from "react-icons/ri";
import { FaRegMoneyBillAlt, FaRegEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <header className="nav-header">
        <div>
          <img
            style={{ height: "40px", width: "40px", borderRadius: "15px" }}
            src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
            alt="person image"
          />
        </div>
        <div>
          <h5>email@gmail.com</h5>
          <p>Idigo Mariah</p>
        </div>
      </header>

      {/* General */}
      <nav className="nav-title">
        <ul>
          <UlList className="nav-single">
            <i>
              <AiOutlineHeatMap />
            </i>

            <Link to="/" style={{ textDecoration: " none", color: "#333" }}>
              General
            </Link>
          </UlList>
          {/* Invitation */}
          <UlList className="nav-single">
            <i>
              <FaRegEnvelope />
            </i>

            <Link
              to="/invitation"
              style={{ textDecoration: " none", color: "#333" }}
            >
              Invitation
            </Link>
          </UlList>
          {/* Billing  */}
          <UlList className="nav-single">
            <i>
              <FaRegMoneyBillAlt />
            </i>
            <Link
              to="/billing"
              style={{ textDecoration: " none", color: "#333" }}
            >
              Billing
            </Link>
          </UlList>
          {/* Pasword */}
          <UlList className="nav-single">
            <i>
              <RiLockPasswordLine />
            </i>
            <Link to="#" style={{ textDecoration: " none", color: "#333" }}>
              Password
            </Link>
          </UlList>
        </ul>
      </nav>

      {/* nav footer  */}
      <NavFooter className="nav-single">
        <i>
          <RiLogoutBoxRLine />
        </i>
        <LogOutBtn
          type="submit"
          onClick={() =>
            console.log(
              "remove authentication && logout && navigate to login page"
            )
          }
        >
          <Anker>Log Out</Anker>
        </LogOutBtn>
      </NavFooter>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: #e2e3e5;
  width: 25vw;
  padding: 10px;
  /* position: static; */
`;

const NavFooter = styled.footer`
  position: fixed;
  bottom: 10px;
`;

// const Arrow = styled.span`
//   content: "";
//   height: 25px;
//   width: 0px;
//   border-radius: 5px;
//   background: transparent;
//   transition: all 0.3s;

//   &:hover {
//     background-color: orange;
//     width: 5px;
//   }
// `;

const UlList = styled.li`
  list-style-type: none;
`;

const Anker = styled.a`
  text-decoration: none;
  color: #333;
  position: relative;
`;

const LogOutBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: #e2e3e5;
`;

export default Navbar;
