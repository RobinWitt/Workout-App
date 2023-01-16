import Link from "next/link";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  max-width: 900px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
`;

const StyledLink = styled.a`
  color: lightcoral;
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink href="/">Home</StyledLink>
      <Link href="/AddNewWorkout">Add new Workout</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/settings">Settings</Link>
    </StyledNavigation>
  );
}
