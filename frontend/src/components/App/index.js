import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext';
import { Container } from './styles';

import GlobalStyles from '../../assets/styles/global';
import AppRoutes from '../../routes/Routes';
import Header from '../Header';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Container>
          <Header />
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
