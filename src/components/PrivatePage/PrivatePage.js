import styled from "styled-components";
import Loader from "../../assets/loader/loader";

export default function PrivatePage({ children }) {
  const local = JSON.parse(localStorage.getItem("shortly"));
  const token = local?.token;
  if (!token) {
    return (
      <Wrapper>
        <h1>Seu acesso foi negado</h1>
        <Loader type={"bubbles"} color="#5D9040" h={200} w={200} />
      </Wrapper>
    );
  }

  return <>{children}</>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
