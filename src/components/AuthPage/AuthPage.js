import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { postSignIn, postSignUp } from "../../services/shortly.js";
import Header from "../Header/Header.js";
import Navbar from "../NavBar/Navbar.js";

export default function AuthPage() {
  const emptyForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function submitForm(e) {
    e.preventDefault();
    if (isLogin()) {
      delete form.name;
      delete form.confirmPassword;

      const loginPromisse = postSignIn(form);
      loginPromisse
        .then((res) => {
          localStorage.setItem(
            "shortly",
            JSON.stringify({ token: res.data.token, timestamp: +new Date() })
          );
          navigate("/home");
        })
        .catch((res) => alert(res.response.data));
      return;
    }
    const registerPromisse = postSignUp(form);

    registerPromisse
      .then((res) => {
        navigate("/auth?type=login");
      })
      .catch((res) => alert(res.response.data));
  }

  function isLogin() {
    return type === "login";
  }

  return (
    <Wrapper>
      <Navbar setForm={setForm} emptyForm={emptyForm} />
      [
      <Header />
      <form className="form" onSubmit={submitForm}>
        {isLogin() ? (
          ""
        ) : (
          <input
            className="form__input form__input-name u-green-box"
            placeholder="Nome"
            name="name"
            value={form ? form.name : ""}
            onChange={handleForm}
            required
          />
        )}

        <input
          className="form__input form__input-email u-green-box"
          placeholder="Email"
          name="email"
          value={form ? form.email : ""}
          onChange={handleForm}
          required
        />
        <input
          className="form__input form__input-password u-green-box"
          placeholder="Senha"
          name="password"
          value={form ? form.password : ""}
          onChange={handleForm}
          type="password"
          required
        />
        {isLogin() ? (
          ""
        ) : (
          <>
            <input
              className="form__input form__input-confirmPassword u-green-box"
              placeholder="Confirme sua senha"
              name="confirmPassword"
              value={form ? form.confirmPassword : ""}
              onChange={handleForm}
              type="password"
              required
            />
          </>
        )}

        <button className="form__button u-default-button-green" type="submit">
          {isLogin() ? "Entrar" : "Criar Conta"}
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

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }

    &__input {
      border: none;
      width: 50vw;
      height: 4rem;
      display: block;
      padding-left: 1rem;
      background-color: white;

      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
`;
