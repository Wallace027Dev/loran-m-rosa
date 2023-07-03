import { useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';
import Loader from '../../components/Loader';

import AdvertsServices from '../../services/AdvertsServices';

import toast from '../../utils/toast';

export default function NewAdverts() {
  const [isLoading, setIsLoading] = useState(false);

  const userFormRef = useRef(null);

  async function handleSubmit(formData) {
    setIsLoading(true);

    try {
      const advert = {
        userId: formData.userId,
        typeList: [formData.typeList],
        createdAt: formData.createdAt,
      };

      const id = await AdvertsServices.createAdvert(advert);

      toast({
        type: 'success',
        text: 'Anúncio cadastrado com sucesso!',
      });
    } catch (error) {
      console.log(error);
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o anúncio!',
      });
    }

    setIsLoading(false);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={`Criar novo anúncio`} path={'../../adverts'} />

      <AdvertForm
        ref={userFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Criar Anúncio"
      />
    </>
  );
}
