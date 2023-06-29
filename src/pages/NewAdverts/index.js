import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';
import Loader from '../../components/Loader';

import AdvertsServices from '../../services/AdvertsServices';
import UsersService from '../../services/UsersService';

import toast from '../../utils/toast';

export default function NewAdverts() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');

  const userFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      try {
        const user = await UsersService.getUserById(id);
        console.log(user);

        userFormRef.current.setFieldsValues(user);

        setIsLoading(false);
        setUserName(user.name);
      } catch {
        navigate('../../users');
        toast({
          type: 'danger',
          text: 'Usuário não encontrado!',
        });
      }
    }

    loadUsers();
  }, [id, navigate]);

  async function handleSubmit(formData) {
    try {
      const advert = {
        userId: id,
        typeList: [formData.typeList],
        createdAt: formData.createdAt,
      };

      console.log(advert);

      await AdvertsServices.createAdvert(advert);

      toast({
        type: 'success',
        text: 'Anúncio cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o anúncio!',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={`anúncio para ${userName} `} path={'../../adverts'} />

      <AdvertForm
        ref={userFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Criar Anúncio"
      />
    </>
  );
}
