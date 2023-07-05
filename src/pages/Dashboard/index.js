import { useCallback, useEffect, useMemo, useState } from 'react';

import Loader from '../../components/Loader';

import {
  Card,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  SeachNotFoundContainer,
} from './styles';

import AdvertsServices from '../../services/AdvertsServices';
import UsersService from '../../services/UsersService';

import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magnifierQuestion from '../../assets/images/magnifierQuestion.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Dashboard() {
  const [adverts, setAdverts] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [initDate, setInitDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState('2099-01-01');

  const filteredAdverts = useMemo(() => {
    if (!Array.isArray(adverts)) {
      return [];
    }
    return adverts.filter((advert) => advert.type.includes(searchDate));
  }, [adverts, searchDate]);

  const loadAdverts = useCallback(async () => {
    try {
      setIsLoading(true);

      const advertsList = await AdvertsServices.listAdverts(initDate, endDate);

      console.log('initDate', initDate);
      console.log('endDate', endDate);

      setAdverts(advertsList);

      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [initDate, endDate]);

  useEffect(() => {
    loadAdverts();
  }, [loadAdverts]);

  function handleTryAgain() {
    loadAdverts();
  }

  function handleChangeSearchDate(e) {
    setSearchDate(e.target.value);
    console.log(searchDate);
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
                      {console.log('reportDate', adverts.reportDate)}
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
            </Card>
          ))}
        </>
      )}
    </>
  );
}
