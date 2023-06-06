import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export default function PageHeader({ title, path }) {
  return (
    <Container>
      <div className='link-container'>
        <Link to={path}>
          <img src={arrow} alt="Back Arrow" />
          <span>Voltar</span>
        </Link>
      </div>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
