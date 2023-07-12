import { useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';
import Loader from '../../components/Loader';

import AdvertsService from '../../services/AdvertsService';

import toast from '../../utils/toast';
import { useNavigate } from 'react-router-dom';

export default function NewAdverts() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const userFormRef = useRef(null);

  async function handleSubmit(formData) {
    setIsLoading(true);

    try {
      const advert = {
        userId: formData.userId,
        typeList: [formData.typeList],
        createdAt: formData.createdAt,
      };

      await AdvertsService.createAdvert(advert);

      toast({
        type: 'success',
        text: 'Anúncio cadastrado com sucesso!',
      });

      navigate(`../adverts`);
    } catch {
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
      <PageHeader title={`Criar novo anúncio`} path={'../../users'} />

      <AdvertForm
        ref={userFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Criar Anúncio"
      />
    </>
  );
}
