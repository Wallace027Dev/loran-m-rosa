import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';

import AdvertsServices from '../../services/AdvertsServices';
import toast from '../../utils/toast';
import ReportForm from '../../components/ReportForm';
import AdvertInputOptions from '../../components/AdvertInputOptions';
import Button from '../../components/Button';
import { Form } from './styles';

export default function EditAdvert() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [typeName, setTypeName] = useState('');
  const [typeList, setTypeList] = useState([]);
  const [advertData, setadvertData] = useState(null);

  const advertFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const isFormValid = typeList;

  useEffect(() => {
    async function loadAdvert() {
      try {
        const advert = await AdvertsServices.getAdvertById(id);

        advertFormRef.current.setFieldsValues(advert);
        setadvertData(advert);
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
    <Form noValidate onSubmit={handleSubmit}>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={`Atualizar informações do anúncio de “${typeName}”`}
        path={'../../adverts'}
      />

      <AdvertInputOptions
        ref={advertFormRef}
        typeList={typeList}
        advertData={advertData}
      />

      <Button
        type="submit"
        disabled={!isFormValid || isLoading}
        isLoading={isSubmitting}
      >
        Atualizar anúncio
      </Button>
    </Form>
  );
}
