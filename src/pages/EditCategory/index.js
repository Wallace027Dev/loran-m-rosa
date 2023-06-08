import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import CategoryForm from '../../components/CategoryForm';
import Loader from '../../components/Loader'

import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast'

export default function EditCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  const categoryFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function LoadCategory() {
      try {
        const category = await CategoriesService.getCategoryById(
          id,
        );

        categoryFormRef.current?.setFieldsValues(category);

        setIsLoading(false);
        setCategoryName(category.name);

      } catch(error) {
        console.log(error)
        navigate('../../categories');
        toast({
          type: 'danger',
          text: 'Categoria não encontrado!',
        });

      }
    }

    LoadCategory()
  }, [id, navigate])


  async function handleSubmit(formData) {
    try {
      const category = {
        name: formData.name,
      };

      const categoryData = await CategoriesService.updateCategory(
        id,
        category,
      );

      setCategoryName(categoryData.name);
      toast({
        type: 'success',
        text: 'Categoria editado com sucesso!',
      });

    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar a categoria!',
      });
    }
  };

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${categoryName}`}
        path={"../../categories"}
      />
      <CategoryForm
        ref={categoryFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Salvar Alterações"
      />
    </>
  );
};
