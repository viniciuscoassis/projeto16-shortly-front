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
          <input className="form__input" />
          <button className="form__button" />
        </form>
      </ShortContainer>
    </>
  );
}

const ShortContainer = styled.div``;
