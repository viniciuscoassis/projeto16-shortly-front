import { useEffect, useState } from "react";
import styled from "styled-components";

import { getRanking } from "../../services/shortly.js";
import Loader from "../../assets/loader/loader.js";
import Navbar from "../NavBar/Navbar";
import Header from "../Header/Header";
export default function HomePage() {
  const [rankingHub, setRankingHub] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rankingRes = await getRanking();
      setRankingHub(rankingRes.data);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Header />

      <main className="main">
        <div className="ranking"></div>
        <h2 className="ranking__title heading-secondary">Ranking</h2>
        <section className="ranking__box u-green-box">
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

  .ranking {
    &__box {
      width: 80vw;
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
