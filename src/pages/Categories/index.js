import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo, useCallback } from 'react';

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListHeader,
  ErrorContainer,
  EmptyListContainer,
  SeachNotFoundContainer
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/emptyBox.svg';
import magnifierQuestion from '../../assets/images/magnifierQuestion.svg';

import Loader from '../../components/Loader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import CategoriesService from '../../services/CategoriesService'

import toast from '../../utils/toast'

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredCategories = useMemo(() => categories.filter((category) => (
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [categories, searchTerm]);

  const LoadCategories = useCallback(async () => {
    try {
      setIsLoading(true);

      const categoriesList = await CategoriesService.listCategories(orderBy);
      setCategories(categoriesList);

      setHasError(false)
    } catch {
      setHasError(true)
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    LoadCategories();
  }, [LoadCategories]);

  function handleToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  };

  function handleChangeSearchTerm(e) {
    setSearchTerm(e.target.value);
  };

  function handleTryAgain() {
    LoadCategories();
  };

  function handleDeleteCategory(category) {
    setCategoryBeingDeleted(category);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setCategoryBeingDeleted(null);
  }

  async function handleConfirmDeleteCategory() {
    try {
      setIsLoadingDelete(true);

      await CategoriesService.deleteCategory(categoryBeingDeleted.id);

      setCategories((prevState) => prevState.filter(
        (category) => category.id !== categoryBeingDeleted.id,
      ));

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Categoria deletada com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar a categoria!',
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
        title={`Tem certeza que deseja remover a categoria "${categoryBeingDeleted?.name}"?`}
        confirmLabel={"Deletar"}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteCategory}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>



      {
        categories.length > 0 && (
          <InputSearchContainer>
            <Input
              type="text"
              value={searchTerm}
              onChange={handleChangeSearchTerm}
              placeholder="Pesquise por nome..."
            />
          </InputSearchContainer>)
      }

      <Header justifyContent={
        hasError
          ? 'flex-end'
          : (
            categories.length > 0
              ? 'space-between'
              : 'center'
          )
      }>
        {(!hasError && categories.length > 0) && (
          <strong>
            {filteredCategories.length}
            {filteredCategories.length === 1 ? ' categoria' : ' categorias'}
          </strong>
        )}
        <Link to="../category/new">Nova Categoria</Link>
      </Header>

      {
        hasError && (
          <ErrorContainer>
            <img src={sad} alt="Sad Status" />

            <div className='datails'>
              <strong>Ocorreu um erro ao obter as suas categorias.</strong>

              <Button type='button' onClick={handleTryAgain}>
                Tentar novamente
              </Button>
            </div>
          </ErrorContainer>
        )
      }

      {
        !hasError && (
          <>
            {(categories.length < 1 && !isLoading) && (
              <EmptyListContainer>
                <img src={emptyBox} alt="Empty box" />
                <p>
                  Você ainda não tem nenhuma categoria cadastrada!
                  Clique no botão <strong>”Nova categoria</strong> à cima para cadastrar a sua primeira!
                </p>
              </EmptyListContainer>
            )}

            {(categories.length > 0 && filteredCategories.length < 1) && (
              <SeachNotFoundContainer>
                <img src={magnifierQuestion} alt="Magnifier Question" />

                <span>
                  Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>
                </span>
              </SeachNotFoundContainer>
            )}

            {filteredCategories.length > 0 && (
              <ListHeader orderBy={orderBy}>
                <button type="button" onClick={handleToggleOrderBy}>
                  <span>Nome</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </ListHeader>
            )}

            {filteredCategories.map((category) => (
              <Card key={category.id}>
                <div className="info">
                  <div className="category-name">
                    <strong>{category.name}</strong>
                  </div>
                </div>
                <div className="actions">
                  <Link to={`../../category/edit/${category.id}`}>
                    <img src={edit} alt="Edit" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDeleteCategory(category)}
                  >
                    <img src={trash} alt="Delete" />
                  </button>
                </div>
              </Card>
            ))}
          </>
        )
      }

    </Container >
  );
}
