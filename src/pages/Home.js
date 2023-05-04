import { Btn } from "../components/Btn";
import Google from "../images/Google.png";
import Facebook from "../images/Facebook.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Body = styled.body`
  margin-top: 44.5rem;
  flex-direction: column;
  text-align: center;

  .btnImg {
    background-color: var(--secondary);
    h3 {
      position: absolute;
    }
    img {
      position: relative;
      left: -40%;
    }
  }

  img {
    height: 2rem;
  }
`;

function Home() {
  return (
    <Body className="center">
      <div>
        <Btn>
          <Link style={{ color: "var(--secondary)" }} className="lnk" to="/signup">
            Inscreva-se
          </Link>
        </Btn>
        <Btn className="btnImg">
          <img src={Google} alt="Google Icon Button" />
          <h3>Continue com Google</h3>
        </Btn>
        <Btn className="btnImg">
          <img src={Facebook} alt="Google Icon Button" />
          <h3>Continue com facebook</h3>
        </Btn>
        <Link className="lnk txt-center" to="/login">
          Login
        </Link>
      </div>
    </Body>
  );
}

export default Home;
