import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext';

import { Container } from './styles';
import GlobalStyles from '../../assets/styles/global';

import AppRoutes from '../../routes/Routes';
import Header from '../Header';

import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />

        <ToastContainer />

        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
