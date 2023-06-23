import { useState } from 'react';
import { Container } from './styles';

import PageHeader from '../../components/PageHeader';
import AdvertForm from '../../components/AdvertForm';

export default function NewAdverts() {
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit() {
    console.log('Clicou!');
  }
  return (
    <Container>
      <PageHeader
        title={isLoading ? 'Carregando...' : `Criar anúncio para userName `}
        path={'../../users'}
      />
      <AdvertForm buttonLabel="Criar Anúncio" onClick={handleSubmit} />
    </Container>
  );
}
