import { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';

import AdvertsServices from '../../services/AdvertsServices';
import toast from '../../utils/toast';

export default function NewAdverts() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData) {
    setIsLoading(true);

    try {
      const advert = {
        userId: formData.userId,
        typeList: formData.typeList,
        createdAt: formData.createdAt,
      };

      await AdvertsServices.createAdvert(advert);

      toast({
        type: 'success',
        text: 'Usuário cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o usuário!',
      });
    }

    setIsLoading(false);
  }

  return (
    <>
      <PageHeader
        title={isLoading ? 'Carregando...' : `Criar anúncio para userName `}
        path={'../../users'}
      />
      <AdvertForm onSubmit={handleSubmit} buttonLabel="Criar Anúncio" />
    </>
  );
}
