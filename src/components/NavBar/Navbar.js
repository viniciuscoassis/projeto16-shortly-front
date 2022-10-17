import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ setForm, emptyForm }) {
  const navigate = useNavigate();

  function canSetForm() {
    return !(setForm === undefined);
  }
  function setFormEmpty() {
    if (canSetForm()) return setForm(emptyForm);
  }

  function navAuth(type) {
    navigate(`/auth/?type=${type}`);
  }
  return (
    <Wrapper>
      {" "}
      <nav className="nav">
        <h4
          onClick={() => {
            navAuth("login");
            setFormEmpty();
          }}
          className="nav__content nav__content-login "
        >
          Entrar
        </h4>
        <h4
          onClick={() => {
            navAuth("signup");
            setFormEmpty();
          }}
          className="nav__content nav__content-signup"
        >
          Cadastrar-se
        </h4>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .nav {
    position: absolute;
    right: 11rem;
    top: 2rem;
    display: flex;
    width: 20rem;
    height: 5rem;
    align-items: center;
    justify-content: space-between;

    &__content {
      font-size: 1.5rem;
      transition: all 0.4s;
      font-weight: 400;
      &:hover {
        transform: scale(1.1);
        filter: brightness(1.3);
        cursor: pointer;
      }
      &-login {
        color: #5d9040;
      }
      &-signup {
        color: #9c9c9c;
      }
    }
  }
`;
