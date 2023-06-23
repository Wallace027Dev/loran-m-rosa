import { forwardRef } from 'react';
import { useState, useImperativeHandle } from 'react';

import { Form } from './styles';

import FormGroup from '../FormGroup';
import Select from '../Select';
import Button from '../Button';
import AdvertInputOptions from '../AdvertInputOptions';
import Input from '../Input';
import useErrors from '../../hooks/useErrors';

const AdvertForm = forwardRef(({ buttonLabel, onSubmit }, ref, props) => {
  const [isSubmitting, setIsSubmitting] = useState('');

  const [userName, setUserName] = useState('');
  const [advertTypeId, setAdvertTypeId] = useState('');
  const [advertTypeName, setAdvertTypeName] = useState('');
  const [date, setDate] = useState(null);

  const notExistAdvertType = !advertTypeName;

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  function handleDate(e) {
    setDate(e.target.value);
    if (!e.target.value) {
      setError({ field: 'input-date-error', message: 'Valor inválido.' });
    } else {
      removeError('input-date-error');
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (adverts) => {
        setUserName(adverts.userName || '');
        setAdvertTypeId(adverts.advertTypeId || '');
        setAdvertTypeName(adverts.advertTypeName || '');
      },
    }),
    []
  );

  return (
    <Form>
      <FormGroup error={getErrorMessageByFieldName('form-invalid-error')}>
        <FormGroup error={getErrorMessageByFieldName('input-date-error')}>
          <Input
            type="date"
            value={date}
            onChange={handleDate}
            error={getErrorMessageByFieldName('input-date-error')}
          />
        </FormGroup>
        <Select
          className="select-type"
          value={advertTypeName}
          onChange={(e) => setAdvertTypeName(e.target.value)}
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

        <Button
          type="submit"
          disabled={notExistAdvertType}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </FormGroup>
    </Form>
  );
});

export default AdvertForm;
