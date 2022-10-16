import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navbar2() {
  const navigate = useNavigate();

  function navAuth(type) {
    navigate(`/${type}`);
  }
  return (
    <Wrapper>
      {" "}
      <nav className="nav">
        <div className="nav__content nav__content-left"></div>

        <div className="nav__content nav__content-right"></div>
        <h4
          onClick={() => {
            navAuth("home");
          }}
          className="nav__content nav__content-home "
        >
          Home
        </h4>
        <h4
          onClick={() => {
            navAuth("ranking");
          }}
          className="nav__content nav__content-ranking"
        >
          Ranking
        </h4>
        <h4
          onClick={() => {
            navAuth("auth");
            localStorage.clear();
          }}
          className="nav__content nav__content-exit"
        >
          Sair
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
      &-home {
        color: #5d9040;
      }
      &-ranking {
        color: #9c9c9c;
      }
      &-exit {
        border-bottom: 2px solid;
      }
    }
  }
`;
