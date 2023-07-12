import { useCallback, useEffect, useMemo, useState } from 'react';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Card,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  SeachNotFoundContainer,
} from './styles';

import AdvertsService from '../../services/AdvertsService';
import UsersService from '../../services/UsersService';

import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magnifierQuestion from '../../assets/images/magnifierQuestion.svg';

export default function Dashboard() {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [initDate, setInitDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2030-01-01');

  const filteredAdverts = useMemo(() => {
    if (!Array.isArray(adverts)) {
      return [];
    }
    return adverts;
  }, [adverts]);

  const loadAdverts = useCallback(async () => {
    const user = await UsersService.showUser();

    if (!user.is_admin) {
      try {
        setIsLoading(true);

        const advertsList = await AdvertsService.listAdverts(initDate, endDate);

        setAdverts(advertsList);

        setHasError(false);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      location.reload();
    }
  }, [initDate, endDate]);

  useEffect(() => {
    loadAdverts();
  }, [loadAdverts]);

  function handleTryAgain() {
    loadAdverts();
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      {adverts.length > 0 && (
        <InputSearchContainer>
          <small>Filtrar</small>
          <div>
            <Input
              name="date"
              id="date"
              type="date"
              value={initDate}
              onChange={(e) => setInitDate(e.target.value)}
            />
            <Input
              name="date"
              id="date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : adverts.length > 0
            ? 'space-between'
            : 'center'
        }
      >
        {!hasError && adverts.length > 0 && (
          <strong>
            {filteredAdverts.length}
            {filteredAdverts.length === 1 ? ' anúncio' : ' anúncios'}
          </strong>
        )}
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad Status" />

          <div className="datails">
            <strong>Ocorreu um erro ao obter os seus anúncios.</strong>

            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {adverts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />
              <p>Você ainda não tem nenhum anúncio cadastrado!</p>
            </EmptyListContainer>
          )}

          {adverts.length > 0 && filteredAdverts.length < 1 && (
            <SeachNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />

              <span>
                Nenhum anúncio foi cadastrado em <strong>{searchDate}</strong>{' '}
                {searchDate.length === 1 ? ' dia' : ' dias'}
              </span>
            </SeachNotFoundContainer>
          )}

          {filteredAdverts.map((advert) => (
            <Card key={advert.id}>
              <div className="info">
                <div className="advert-name">
                  {advert.type === 'RECOGNITION' && (
                    <div>
                      <small>Reconhecimento</small>
                      <div className="card-info">
                        <div>
                          <strong>{advert.valueUsed || 0}</strong>
                          <span>Valor usado</span>
                        </div>
                        <div>
                          <strong>{advert.contentViews || 0}</strong>
                          <span>Visualizações do anúncio</span>
                        </div>
                        <div>
                          <strong>{advert.views || 0}</strong>
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
                          <strong>{advert.valueUsed || 0}</strong>
                          <span>Valor usado</span>
                        </div>
                        <div>
                          <strong>{advert.contentViews || 0}</strong>
                          <span>Visualizações do anúncio</span>
                        </div>
                        <div>
                          <strong>{advert.linkClicks || 0}</strong>
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
                          <strong>{advert.valueUsed || 0}</strong>
                          <span>Valor usado</span>
                        </div>
                        <div>
                          <strong>{advert.contentViews || 0}</strong>
                          <span>Visualizações do anúncio</span>
                        </div>
                        <div>
                          <strong>{advert.linkClicks || 0}</strong>
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
                          <strong>{advert.valueUsed || 0}</strong>
                          <span>Valor usado</span>
                        </div>
                        <div>
                          <strong>{advert.contentViews || 0}</strong>
                          <span>Visualizações do anúncio</span>
                        </div>
                        <div>
                          <strong>{advert.likes || 0}</strong>
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
                          <strong>{advert.valueUsed || 0}</strong>
                          <span>Valor usado</span>
                        </div>
                        <div>
                          <strong>{advert.contentViews || 0}</strong>
                          <span>Visualizações do anúncio</span>
                        </div>
                        <div>
                          <strong>{advert.engagement || 0}</strong>
                          <span>Engajamento</span>
                        </div>
                        <div>
                          <strong>{advert.likes || 0}</strong>
                          <span>Curtidas</span>
                        </div>
                        <div>
                          <strong>{advert.recordsStarted || 0}</strong>
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
                          <strong>{advert.valueUsed || 0}</strong>
                          <span>Valor usado</span>
                        </div>
                        <div>
                          <strong>{advert.contentViews || 0}</strong>
                          <span>Visualizações do anúncio</span>
                        </div>
                        <div>
                          <strong>{advert.recordsStarted || 0}</strong>
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
                          <strong>{advert.valueUsed || 0}</strong>
                          <span>Valor usado</span>
                        </div>
                        <div>
                          <strong>{advert.costPerResult || 0}</strong>
                          <span>Custo por resultado</span>
                        </div>
                        <div>
                          <strong>{advert.contentViews || 0}</strong>
                          <span>Visualizações do anúncio</span>
                        </div>
                        <div>
                          <strong>{advert.linkClicks || 0}</strong>
                          <span>Cliques no link</span>
                        </div>
                      </div>
                      <div className="card-info">
                        <div>
                          <strong>{advert.engagement || 0}</strong>
                          <span>Adições no carrinho</span>
                        </div>
                        <div>
                          <strong>{advert.recordsStarted || 0}</strong>
                          <span>Compras iniciadas</span>
                        </div>
                        <div>
                          <strong>{advert.views || 0}</strong>
                          <span>Total de vendas</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </>
      )}
    </>
  );
}
