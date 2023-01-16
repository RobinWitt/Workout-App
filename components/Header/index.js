import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 900px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Workouts.</h1>
    </StyledHeader>
  );
}
