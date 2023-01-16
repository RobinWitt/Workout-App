import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function AddNewWorkout({ onSubmit }) {
  return (
    <>
      <h3 id="addNewWorkout">Add new Workout</h3>
      <StyledForm aria-labelledby="addNewWorkout" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name"></input>
        <label htmlFor="sets">Amount of Sets</label>
        <input id="sets" type="number" name="sets"></input>
        <label htmlFor="reps">Amount of Repetitions</label>
        <input id="reps" type="number" name="reps"></input>
        <label htmlFor="duration">Duration</label>
        <input id="duration" type="number" name="duration"></input>
        <label htmlFor="break">Duration of Break</label>
        <input id="break" type="number" name="break"></input>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}
