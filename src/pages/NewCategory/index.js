import { useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import CategoryForm from '../../components/CategoryForm'
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast'

export default function NewCategory() {
  const categoryFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      const category = {
        name: formData.name,
      };

      await CategoriesService.createCategory(category);

      categoryFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Categoria cadastrada com sucesso!',
      });

    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar a categoria!',
      });
    }
  }

  return (
    <>
      <PageHeader
        title="Nova Categoria"
        path={"../../categories"}
      />

      <CategoryForm
        ref={categoryFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Cadastrar"
      />
    </>
  );
};
