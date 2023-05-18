import NewAdsForm from "../../components/NewAdsForm";
import { Container } from "./styles";
import { useState } from "react";

function User() {
  const [ads, setAds] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleCreateAd = (newAd) => {
    setAds((prevAds) => [...prevAds, newAd]);
  };

  return (
    <Container className="center">
      <div>
        <button className="btn" onClick={() => setFormVisible(true)}>
          <h3>Criar novo Anúncio</h3>
        </button>
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
    </Container>
  );
}

export default User;
