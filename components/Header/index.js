import styled from "styled-components";

const StyledHeader = styled.header`
  color: red;
  display: flex;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Workouts.</h1>
    </StyledHeader>
  );
}
