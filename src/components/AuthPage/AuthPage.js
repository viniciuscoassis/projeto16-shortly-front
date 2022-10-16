import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header.js";
import Navbar from "../NavBar/Navbar.js";

export default function AuthPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  function handleForm(e) {
    setForm({ [e.target.name]: e.target.value });
  }
  function submitForm(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <Wrapper>
      <Navbar />[
      <Header />
      <form className="form" onSubmit={submitForm}>
        <input
          className="form__input form__input-name u-green-box"
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
        <input
          className="form__input form__input-name u-green-box"
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
        <button className="form__button" type="submit">
          a
        </button>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .form {
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;

    &__input {
      border: none;
      width: 50vw;
      height: 4rem;
      display: block;
      padding-left: 1rem;

      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
    &__button {
      width: 20vw;
      margin: 0 auto;
    }
  }
`;
