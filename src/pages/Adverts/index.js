import { useEffect, useCallback, useMemo, useState } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  ErrorContainer,
  EmptyListContainer,
  SeachNotFoundContainer,
} from './styles';

import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magnifierQuestion from '../../assets/images/magnifierQuestion.svg';

import Loader from '../../components/Loader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { AdvertCard } from '../../components/AdvertCard';

import toast from '../../utils/toast';

import AdvertsService from '../../services/AdvertsService';

export default function Adverts() {
  const [adverts, setAdverts] = useState([]);
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

      const advertsList = await AdvertsService.listAdverts();

      setAdverts(advertsList);

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

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setAdvertBeingDeleted(null);
  }

  async function handleConfirmDeleteAdvert() {
    try {
      setIsLoadingDelete(true);

      await AdvertsService.deleteAdvert(advertBeingDeleted.id);

      setAdverts((prevState) =>
        prevState.filter((advert) => advert.id !== advertBeingDeleted.id)
      );

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Anúncio deletado com sucesso!',
      });
    } catch (error) {
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
        title={'Tem certeza que deseja remover este anúncio?'}
        confirmLabel={'Deletar'}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteAdvert}
      >
        <p>
          Esta ação não poderá ser defeita e todos os dados adicionados
          anteriormente serão perdidos!
        </p>
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
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad Status" />

          <div className="datails">
            <strong>Ocorreu um erro ao obter os anúncios dos usuários.</strong>

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
                Vá à página <strong>“Usuários”</strong>, escolha um usuário e
                clique em <strong>“Novo anúncio”</strong>!
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
            <AdvertCard
              key={advert.id}
              advert={advert}
              setIsDeleteModalVisible={setIsDeleteModalVisible}
              setAdvertBeingDeleted={setAdvertBeingDeleted}
            />
          ))}
        </>
      )}
    </Container>
  );
}
