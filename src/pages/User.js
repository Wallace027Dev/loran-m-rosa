import styled from "styled-components";
import icon from "../assets/icon.png";
import { Btn } from "../components/Btn";
import NewAdsForm from "../components/NewAdsForm";
import { useState } from "react";

const Main = styled.main`
  margin-top: 1rem;
  flex-direction: column;

  img {
    height: 10rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
`;

function User() {
  const [ads, setAds] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleCreateAd = (newAd) => {
    setAds((prevAds) => [...prevAds, newAd]);
  };

  return (
    <Main className="center">
      <div>
        <img src={icon} alt="Bakoads Icon" />
      </div>
      <div>
        <Btn onClick={() => setFormVisible(true)}>
          <h3>Criar novo Anúncio</h3>
        </Btn>

        {formVisible && <NewAdsForm onCreatedAd={handleCreateAd} />}

        <ul>
          {ads.map((ad) => (
            <li key={ad.id}>
              <h2>{ad.name}</h2>
              <h3>date: {ad.date}</h3>
              <h3>countClicks: {ad.countClicks}</h3>
              <h3>initMessage: {ad.initMessage}</h3>
              <h3>metric: {ad.metric}</h3>
              <h3>Impressions: {ad.impressions}</h3>
              <h3>newFollowers: {ad.newFollowers}</h3>
              <h3>newSales: {ad.newSales}</h3>
              <h3>newRecords: {ad.newRecords}</h3>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
}

export default User;
