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
        <input id="name" name="name" required></input>
        <label htmlFor="description">Description</label>
        <input id="description" name="description"></input>
        <label htmlFor="sets">Amount of Sets</label>
        <input id="sets" type="number" name="sets" required></input>
        <label htmlFor="reps">Amount of Repetitions</label>
        <input id="reps" type="number" name="repetitions" required></input>
        <label htmlFor="duration">Duration in seconds</label>
        <input id="duration" type="number" name="duration" required></input>
        <label htmlFor="break">Duration of Break in seconds</label>
        <input id="break" type="number" name="breaktime" required></input>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}
