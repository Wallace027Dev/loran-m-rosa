import { useState } from 'react';
import { Container } from './styles';

import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';

export default function Adverts() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Container>
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar userName `}
        path={'../../users'}
      />
      <AdvertForm />
    </Container>
  );
}
