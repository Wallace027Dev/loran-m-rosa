import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../routes/Routes';
import { AuthProvider } from '../../context/authContext';

import { Container } from './styles';

function App() {
  return (
		<AuthProvider>
			<BrowserRouter>
				<Container>
					<AppRoutes />
				</Container>
			</BrowserRouter>
		</AuthProvider>
  );
}

export default App;
