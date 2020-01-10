import React from "react";
import { useHistory } from "react-router-dom";

const Nav = ({ user, setLoggedIn }) => {
  const history = useHistory();
  const handleClick = () => {
    window.localStorage.clear();
    setLoggedIn(false);
    history.push("/login");
  };
  return (
    <Header>
      <HeaderLeft>
        <Logo>
          <span>Pro</span>
          <span>Lift</span>
        </Logo>
        <DashboardLink to="/dashboard">Dashboard</DashboardLink>
      </HeaderLeft>
      <Metadata>
        <p>
          Logged in as:
          <br />
          <Name>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </Name>
        </p>
        <LogoutButton onClick={() => handleClick()}>Log Out</LogoutButton>
      </Metadata>
    </Header>
  );
};

export default Nav;
