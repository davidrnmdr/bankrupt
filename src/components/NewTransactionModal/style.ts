import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: var(--background);
    border: 0;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--place-holder);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: var(--text-title);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
  }
`;

type RadioButton = {
  isActive: boolean;
  activeColor: "green" | "red";
};

const colors = { green: "#015f43", red: "#aa2834" };

export const RadioButton = styled.button<RadioButton>`
  height: 4rem;
  border: 0;
  border-radius: 0.25rem;
  background: var(--shape2);

  background-color: ${(props) =>
    props.isActive
      ? transparentize(0.3, colors[props.activeColor])
      : "var(--shape2)"};

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #29292e;

  transition: background-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#29292e")};
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
