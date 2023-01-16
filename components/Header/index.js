import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.2rem;
  text-decoration: underline 2px solid;
  border: 2px solid black;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Workouts.</h1>
    </StyledHeader>
  );
}
