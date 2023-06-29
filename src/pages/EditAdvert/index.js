import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';

import AdvertsServices from '../../services/AdvertsServices';
import toast from '../../utils/toast';
import ReportForm from '../../components/ReportForm';

export default function EditAdvert() {
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const advertFormRef = useRef(null);

  useEffect(() => {
    async function loadAdvert() {
      try {
        const advert = await AdvertsServices.getAdvertById(id);

        setType(advert.type);
        console.log(advert);

        advertFormRef.current.setFieldsValues(advert);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        navigate('../../adverts');
        toast({
          type: 'danger',
          text: 'Usuário não encontrado!',
        });
      }
    }

    loadAdvert();
  }, [id, navigate]);

  async function handleSubmit(formData) {
    try {
      const advert = {
        userId: formData.userId,
      };

      await AdvertsServices.createReport(advert, id);

      toast({
        type: 'success',
        text: 'Anúncio editado com sucesso!',
      });
    } catch (error) {
      console.log(error);
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o anúncio!',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={'Atualizar informações do anúncio'}
        path={'../../adverts'}
      />

      <ReportForm
        ref={advertFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Atualizar anúncio"
        typeList={type}
      />
    </>
  );
}
