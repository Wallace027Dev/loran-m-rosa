import { useState } from "react";
import { Btn } from "../components/Btn";
import Google from "../images/Google.png";
import Facebook from "../images/Facebook.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

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

function Welcome() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Body className="center">
      <div>
        <Btn>
          <Link
            style={{ color: "var(--secondary)" }}
            className="lnk"
            to="/signup"
          >
            Inscreva-se
          </Link>
        </Btn>
        <Btn onClick={handleGoogleSignIn} className="btnImg">
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

export default Welcome;
