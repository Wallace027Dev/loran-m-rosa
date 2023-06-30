import { useRef, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';
import Loader from '../../components/Loader';

import AdvertsServices from '../../services/AdvertsServices';

import toast from '../../utils/toast';

export default function NewAdverts() {
  const [isLoading, setIsLoading] = useState(false);

  const userFormRef = useRef(null);
  /* 
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
  }, [id, navigate]); */

  async function handleSubmit(formData) {
    try {
      const advert = {
        userId: formData.userId,
        typeList: [formData.typeList],
        createdAt: formData.createdAt,
      };

      console.log(advert);

      const id = await AdvertsServices.createAdvert(advert);
      console.log('Adverts Id : ', id);

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
