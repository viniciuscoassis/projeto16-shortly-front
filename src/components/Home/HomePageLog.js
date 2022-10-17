import styled from "styled-components";
import Header from "../Header/Header";
import Navbar2 from "../NavBar/Navbar2";

export default function HomePageLogged() {
  return (
    <>
      <Navbar2 />
      <Header />
      <ShortContainer>
        <form className="form">
          <input
            className="form__input u-green-box"
            placeholder=" Links que cabem no bolso"
          />
          <button className="form__button u-default-button-green">
            Encurtar Link
          </button>
        </form>
        <div className="container">
          ola
          <div className="container__entity">ola</div>
        </div>
      </ShortContainer>
    </>
  );
}

const ShortContainer = styled.div`
  height: 100%;
  .form {
    padding-top: 6rem;
    display: flex;
    width: 80vw;
    margin: 0 auto;
    justify-content: space-between;

    &__input {
      border: none;
      display: flex;
      margin: 0;
      width: 60vw;

      &::placeholder {
        padding-left: 0.7rem;
        color: #9c9c9c;
      }
    }
    &__button {
      margin: 0;
    }
  }

  .container {
    margin: 5rem auto;
    width: 80vw;
    min-height: 30vh;
    display: flex;
    justify-content: center;
    background-color: orangered;
  }
`;
