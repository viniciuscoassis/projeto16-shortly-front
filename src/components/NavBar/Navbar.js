export default function Navbar() {
  return (
    <>
      {" "}
      <Wrapper className="nav">
        <h4 className="nav__content nav__content-login ">Entrar</h4>
        <h4 className="nav__content nav__content-signup">Cadastrar-se</h4>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
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
    &-login {
      color: #5d9040;
    }
    &-signup {
      color: #9c9c9c;
    }
  }
`;
