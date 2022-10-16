import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/img/Logo.png";
import { getRanking } from "../../services/shortly.js";
import Loader from "../../assets/loader/loader.js";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const [rankingHub, setRankingHub] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const rankingRes = await getRanking();
      setRankingHub(rankingRes.data);
    };
    fetchData();
  }, []);

  function navAuth(type) {
    navigate(`/auth/?type=${type}`);
  }

  return (
    <Wrapper>
      <nav className="nav">
        <h4
          onClick={() => navAuth("login")}
          className="nav__content nav__content-login "
        >
          Entrar
        </h4>
        <h4
          onClick={() => navAuth("signup")}
          className="nav__content nav__content-signup"
        >
          Cadastrar-se
        </h4>
      </nav>
      <header className="header">
        <img className="header__img" src={logo} alt="logo" />
      </header>

      <main className="main">
        <div className="ranking"></div>
        <h2 className="ranking__title heading-secondary">Ranking</h2>
        <section className="ranking__box">
          <ul className="ranking__list">
            {rankingHub.length === 0 ? (
              <Loader type={"spinningBubbles"} color="black" />
            ) : (
              rankingHub.map((val, index) => {
                return (
                  <li key={index}>{`${index + 1}. ${val.name} - ${
                    val.linkcount
                  } links - ${val.visitscount} visualizações `}</li>
                );
              })
            )}
          </ul>
        </section>
      </main>
      <footer className="footer">
        {" "}
        <h2 className="footer__message heading-secondary">
          Crie sua conta para usar nosso serviço!
        </h2>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .heading-secondary {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: black;
    margin: 6rem;
  }
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
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        filter: brightness(1.2);
      }
      &-login {
        color: #5d9040;
      }
      &-signup {
        color: #9c9c9c;
      }
    }
  }
  .header {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
  }
  .ranking {
    &__box {
      width: 80vw;
      margin: 0 auto;
      box-shadow: 0 0.2rem 0.4rem 0.3rem rgba(120, 177, 89, 0.15);
      border-radius: 3px;
    }
    &__list {
      padding: 2rem;
      li {
        list-style: none;

        color: black;
        font-weight: 600;
        font-size: 1.3rem;
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;
