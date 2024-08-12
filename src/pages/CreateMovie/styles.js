import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
`;

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 4rem auto;
  overflow-y: auto;

  > header {
    display: grid;
    margin-bottom: 4rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 4rem;
  }
`;