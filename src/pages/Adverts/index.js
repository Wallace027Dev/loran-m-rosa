import { Link } from 'react-router-dom';
import { useEffect, useCallback, useMemo, useState } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SeachNotFoundContainer,
} from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magnifierQuestion from '../../assets/images/magnifierQuestion.svg';

import Loader from '../../components/Loader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import AdvertsServices from '../../services/AdvertsServices';
import UsersService from '../../services/UsersService';

export default function Adverts() {
  const [adverts, setAdverts] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [advertBeingDeleted, setAdvertBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredAdverts = useMemo(() => {
    if (!Array.isArray(adverts)) {
      return [];
    }

    return adverts.filter((advert) =>
      advert.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [adverts, searchTerm]);

  const loadAdverts = useCallback(async () => {
    try {
      setIsLoading(true);

      const advertsList = await AdvertsServices.listAdverts();
      const usersList = await UsersService.listUsers();

      setAdverts(advertsList);
      setUsers(usersList);

      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAdverts();
  }, [loadAdverts]);

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function handleTryAgain() {
    loadAdverts();
  }

  function handleDeleteAdvert(advert) {
    setAdvertBeingDeleted(advert);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setAdvertBeingDeleted(null);
  }

  async function handleConfirmDeleteAdvert() {
    try {
      setIsLoadingDelete(true);

      await AdvertsService.deleteAdvert(advertBeingDeleted.id);

      setAdvert((prevState) =>
        prevState.filter((advert) => advert.id !== advertBeingDeleted.id)
      );

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Anúncio deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o anúncio!',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Modal
        danger
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover o usuário "${advertBeingDeleted?.name}"?`}
        confirmLabel={'Deletar'}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteAdvert}
      >
        <p>Esta ação não poderá ser defeita!</p>
      </Modal>

      {adverts.length > 0 && (
        <InputSearchContainer>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Pesquise por tipo..."
          />
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
        <Link to="../advert/new">Novo Anúncio</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad Status" />

          <div className="datails">
            <strong>
              Ocorreu um erro ao obter os seus anúncios e usuários.
            </strong>

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
              <p>
                Você ainda não tem nenhum anúncio cadastrado! Clique no botão{' '}
                <strong>”Novo anúncio</strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {adverts.length > 0 && filteredAdverts.length < 1 && (
            <SeachNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />

              <span>
                Nenhum resultado foi encontrado para{' '}
                <strong>{searchTerm}</strong>
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
                          <p>Valor usado</p>
                        </div>
                        <div>
                          <strong>{advert.contentViews}</strong>
                          <p>Visualizações do anúncio</p>
                        </div>
                        <div>
                          <strong>{advert.recordsStarted}</strong>
                          <p>Cadstros</p>
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
                <button
                  type="button"
                  onClick={() => handleDeleteAdvert(advert)}
                >
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
