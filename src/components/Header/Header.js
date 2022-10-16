import styled from "styled-components";
import logo from "../../assets/img/Logo.png";
export default function Header() {
  return (
    <Wrapper>
      {" "}
      <header className="header">
        <img className="header__img" src={logo} alt="logo" />
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;
