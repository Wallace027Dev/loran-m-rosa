import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Constainer } from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import UsersService from '../../services/UsersService';

export function AdvertCard({
  advert,
  setAdvertBeingDeleted,
  setIsDeleteModalVisible,
}) {
  const [user, setUser] = useState(null);

  const loadUsers = useCallback(async () => {
    const id = advert.userId;

    try {
      const user = await UsersService.getUserById(id);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }, [advert.id]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  function handleDeleteAdvert(advert) {
    setAdvertBeingDeleted(advert);
    setIsDeleteModalVisible(true);
  }

  return (
    <Constainer key={advert.id}>
      <div className="info">
        {user && <strong>{user.name}</strong>}
        <div className="advert-name">
          {advert.type === 'RECOGNITION' && (
            <div>
              <strong>{advert.reportDate}</strong>
              <small>Reconhecimento</small>
              <div className="card-info">
                <div>
                  <strong>{advert.valueUsed}</strong>
                  <span>Valor usado</span>
                </div>
                <div>
                  <strong>{advert.contentViews}</strong>
                  <span>Visualizações do anúncio</span>
                </div>
                <div>
                  <strong>0</strong>
                  <span>Visualizaram o anúncio</span>
                </div>
              </div>
            </div>
          )}
          {advert.type === 'TRAFFIC' && (
            <div>
              <small>Tráfego</small>
              <div className="card-info">
                <div>
                  <strong>{advert.valueUsed}</strong>
                  <span>Valor usado</span>
                </div>
                <div>
                  <strong>{advert.contentViews}</strong>
                  <span>Visualizações do anúncio</span>
                </div>
                <div>
                  <strong>{advert.linkClicks}</strong>
                  <span>Cliques no anúncio</span>
                </div>
              </div>
            </div>
          )}
          {advert.type === 'RECEIVE_MESSAGES' && (
            <div>
              <small>Mensagens recebidas</small>
              <div className="card-info">
                <div>
                  <strong>{advert.valueUsed}</strong>
                  <span>Valor usado</span>
                </div>
                <div>
                  <strong>{advert.contentViews}</strong>
                  <span>Visualizações do anúncio</span>
                </div>
                <div>
                  <strong>{advert.linkClicks}</strong>
                  <span>Mensagens iniciadas</span>
                </div>
              </div>
            </div>
          )}
          {advert.type === 'GET_PAGE_LIKES' && (
            <div>
              <small>Receber curtidas na página</small>
              <div className="card-info">
                <div>
                  <strong>{advert.valueUsed}</strong>
                  <span>Valor usado</span>
                </div>
                <div>
                  <strong>{advert.contentViews}</strong>
                  <span>Visualizações do anúncio</span>
                </div>
                <div>
                  <strong>{advert.likes}</strong>
                  <span>Curtidas</span>
                </div>
              </div>
            </div>
          )}
          {advert.type === 'BOOST_PUBLICATION' && (
            <div>
              <small>Turbinar publicação</small>
              <div className="card-info">
                <div>
                  <strong>{advert.valueUsed}</strong>
                  <span>Valor usado</span>
                </div>
                <div>
                  <strong>{advert.contentViews}</strong>
                  <span>Visualizações do anúncio</span>
                </div>
                <div>
                  <strong>{advert.engagement}</strong>
                  <span>Engajamento</span>
                </div>
                <div>
                  <strong>{advert.likes}</strong>
                  <span>Curtidas</span>
                </div>
                <div>
                  <strong>{advert.recordsStarted}</strong>
                  <span>Comentários</span>
                </div>
              </div>
            </div>
          )}
          {advert.type === 'RECORDS' && (
            <div>
              <small>Cadastros</small>
              <div className="card-info">
                <div>
                  <strong>{advert.valueUsed}</strong>
                  <span>Valor usado</span>
                </div>
                <div>
                  <strong>{advert.contentViews}</strong>
                  <span>Visualizações do anúncio</span>
                </div>
                <div>
                  <strong>{advert.recordsStarted}</strong>
                  <span>Cadstros</span>
                </div>
              </div>
            </div>
          )}
          {advert.type === 'SALES' && (
            <div>
              <small>Vendas</small>
              <div className="card-info">
                <div>
                  <strong>{advert.valueUsed}</strong>
                  <span>Valor usado</span>
                </div>
                <div>
                  <strong>{advert.costPerResult}</strong>
                  <span>Custo por resultado</span>
                </div>
                <div>
                  <strong>{advert.contentViews}</strong>
                  <span>Visualizações do anúncio</span>
                </div>
                <div>
                  <strong>{advert.linkClicks}</strong>
                  <span>Cliques no link</span>
                </div>
              </div>
              <div className="card-info">
                <div>
                  <strong>{advert.engagement}</strong>
                  <span>Adições no carrinho</span>
                </div>
                <div>
                  <strong>{advert.recordsStarted}</strong>
                  <span>Compras iniciadas</span>
                </div>
                <div>
                  <strong>{advert.views}</strong>
                  <span>Total de vendas</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="actions">
        <Link to={`../../advert/edit/${advert.id}`}>
          <img src={edit} alt="Edit" />
        </Link>
        <button type="button" onClick={() => handleDeleteAdvert(advert)}>
          <img src={trash} alt="Delete" />
        </button>
      </div>
    </Constainer>
  );
}
