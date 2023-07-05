import PropTypes from 'prop-types';
import {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useCallback,
} from 'react';

import { Form } from './styles';

import FormGroup from '../FormGroup';
import Select from '../Select';
import Button from '../Button';
import Input from '../Input';

import useErrors from '../../hooks/useErrors';
import UsersService from '../../services/UsersService';

const AdvertForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);
  const [typeList, setTypeList] = useState('');
  const [createdAt, setCreatedAt] = useState(null);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = typeList && userId && createdAt && errors.length === 0;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (advert) => {
        setUserId(advert.userId || '');
        setTypeList(advert.typeList || '');
        setCreatedAt(advert.createdAt || '');
      },
    }),
    []
  );

  useEffect(() => {
    setIsLoading(true);
    async function loadUsers() {
      const usersList = await UsersService.listUsers();

      setUsers(usersList);
    }
    loadUsers();

    setIsLoading(false);
  }, []);

  function handleReportDate(e) {
    setCreatedAt(e.target.value);
    if (!e.target.value) {
      setError({ field: 'input-date-error', message: 'Valor inválido.' });
    } else {
      removeError('input-date-error');
    }
  }

  function handleTypeList(e) {
    setTypeList(e.target.value);
    if (!e.target.value) {
      setError({ field: 'select-type-error', message: 'Valor inválido.' });
    } else {
      removeError('select-type-error');
    }
  }

  function handleUserId(e) {
    setUserId(e.target.value);
    if (!e.target.value) {
      setError({ field: 'select-user-error', message: 'Valor inválido.' });
    } else {
      removeError('select-user-error');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      userId,
      typeList,
      createdAt,
    });

    setIsSubmitting(false);
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('form-invalid-error')}>
        <FormGroup error={getErrorMessageByFieldName('input-date-error')}>
          <Input
            type="date"
            value={createdAt || ''}
            onChange={handleReportDate}
            error={getErrorMessageByFieldName('input-date-error')}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('select-type-error')}>
          <Select
            className="select-type"
            value={typeList}
            onChange={handleTypeList}
            error={getErrorMessageByFieldName('select-type-error')}
          >
            <option value="">Tipo do Anúncio</option>
            <option value="RECOGNITION">Reconhecimento</option>
            <option value="TRAFFIC">Tráfego</option>
            <option value="RECEIVE_MESSAGES">Mensagens Recebidas</option>
            <option value="GET_PAGE_LIKES">Curtidas</option>
            <option value="BOOST_PUBLICATION">Impulsionamento</option>
            <option value="RECORDS">Registros</option>
            <option value="SALES">Vendas</option>
          </Select>
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('select-user-error')}>
          <Select
            className="select-type"
            value={userId}
            onChange={handleUserId}
            error={getErrorMessageByFieldName('select-user-error')}
          >
            <option value="">Usuários</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Select>
        </FormGroup>

        <Button
          type="submit"
          disabled={!isFormValid || isLoading}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </FormGroup>
    </Form>
  );
});

AdvertForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AdvertForm;
