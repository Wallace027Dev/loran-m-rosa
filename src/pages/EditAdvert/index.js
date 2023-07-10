import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import AdvertInputOptions from '../../components/AdvertInputOptions';

import AdvertsServices from '../../services/AdvertsServices';
import toast from '../../utils/toast';

export default function EditAdvert() {
  const [isLoading, setIsLoading] = useState(true);
  const [advertId, setAdvertId] = useState('');
  const [typeName, setTypeName] = useState('');
  const [typeList, setTypeList] = useState([]);

  const advertFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadAdvert() {
      try {
        setAdvertId(id);
        const advert = await AdvertsServices.getAdvertById(id);

        advertFormRef.current.setFieldsValues(advert);

        setTypeList(advert.type);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        navigate('../../adverts');
        toast({
          type: 'danger',
          text: 'Usuário não encontrado!',
        });
        setIsLoading(false);
      }
    }

    loadAdvert();
  }, [id, navigate]);

  useEffect(() => {
    switch (typeList) {
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
  }, [typeList]);

  async function handleSubmit(formData) {
    try {
      const advert = {
        advertId: id,
        reportDate: formData.reportDate,
        valueUsed: parseInt(formData.valueUsed) || 0,
        contentViews: parseInt(formData.contentViews) || 0,
        linkClicks: parseInt(formData.linkClicks) || 0,
        likes: parseInt(formData.likes) || 0,
        views: parseInt(formData.views) || 0,
        costPerResult: parseInt(formData.costPerResult) || 0,
        engagement: parseInt(formData.engagement) || 0,
        recordsStarted: parseInt(formData.recordsStarted) || 0,
      };

      await AdvertsServices.createReport(advertId, advert);

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

    setIsLoading(false);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={`Atualizar informações do anúncio de “${typeName}”`}
        path={'../../adverts'}
      />

      <AdvertInputOptions
        ref={advertFormRef}
        typeList={typeList}
        onSubmit={handleSubmit}
      />
    </>
  );
}
