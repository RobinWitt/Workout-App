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

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link href="/" passHref legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/AddNewWorkout" passHref legacyBehavior>
        <a>Add new Workout</a>
      </Link>
      <Link href="/profile" passHref legacyBehavior>
        <a>Profile</a>
      </Link>
      <Link href="/settings" passHref legacyBehavior>
        <a>Settings</a>
      </Link>
    </StyledNavigation>
  );
}
