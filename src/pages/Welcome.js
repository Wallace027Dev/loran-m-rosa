import { useState } from "react";
import { Btn } from "../components/Btn";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import bakoads from "../assets/bakoads.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../services/firebase";

const Container = styled.main`
  margin-top: 2rem;
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
      height: 2rem;
    }
  }

  .logo {
    img {
      width: 30rem;
			margin-bottom: 15rem;
    }
    h2 {
			position: absolute;
      max-width: 60vw;
			top: 30%;
			color: var(--primary);
			font-weight: 800;
    }
  }
`;

function Welcome() {
  const [user, setUser] = useState(null);
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

  function HandleFacebookSigniIn() {
    const provider = new FacebookAuthProvider();

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
    <Container className="center">
      <div>
        <div className="logo">
          <img src={bakoads} alt="Bakoads Logo" />
          <h2>
            Crie a sua conta para anunciar com a <u>Bakoads</u> e mostre seus produtos
            e serviços para mulhares de pessoas
          </h2>
        </div>
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
            <img src={google} alt="Google Icon Button" />
            <h3>Continue com Google</h3>
          </Btn>
          <Btn onClick={HandleFacebookSigniIn} className="btnImg">
            <img src={facebook} alt="Google Icon Button" />
            <h3>Continue com facebook</h3>
          </Btn>
          <Link className="lnk txt-center" to="/login">
            Entrar com Email e senha
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
