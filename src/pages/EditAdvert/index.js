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
  const [typeName, setTypeName] = useState('');
  const [advertTypeName, setAdvertTypeName] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const advertFormRef = useRef(null);

  useEffect(() => {
    async function loadAdvert() {
      try {
        const advert = await AdvertsServices.getAdvertById(id);

        setAdvertTypeName(advert.type);

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

  useEffect(() => {
    switch (advertTypeName) {
      case 'RECOGNITION':
        setTypeName('reconhecimento');
        break;
      case 'TRAFFIC':
        setTypeName('tráfego');
        break;
      case 'RECEIVE_MESSAGES':
        setTypeName('mensagens recebidas');
        break;
      case 'GET_PAGE_LIKES':
        setTypeName('curtidas na página');
        break;
      case 'BOOST_PUBLICATION':
        setTypeName('turbinar');
        break;
      case 'RECORDS':
        setTypeName('cadastros');
        break;
      case 'SALES':
        setTypeName('vendas');
        break;

      default:
        setTypeName('');
        break;
    }
  }, [advertTypeName]);

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
        title={`Atualizar informações do anúncio de ${typeName}`}
        path={'../../adverts'}
      />

      <ReportForm
        ref={advertFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Atualizar anúncio"
        typeList={advertTypeName}
      />
    </>
  );
}
