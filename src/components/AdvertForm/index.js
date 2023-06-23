import { forwardRef } from 'react';
import { useState, useImperativeHandle } from 'react';

import { Form } from './styles';

import FormGroup from '../FormGroup';
import Select from '../Select';
import Button from '../Button';
import AdvertInputOptions from '../AdvertInputOptions';
import Input from '../Input';

const AdvertForm = forwardRef(({ buttonLabel, onSubmit }, ref, props) => {
  const [isSubmitting, setIsSubmitting] = useState('');

  const [userName, setUserName] = useState('');
  const [advertTypeId, setAdvertTypeId] = useState('');
  const [advertTypeName, setAdvertTypeName] = useState('');

  const notExistAdvertType = !advertTypeName;

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
      <FormGroup>
        <Input type="date" />
        <Select
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
        <AdvertInputOptions advertTypeName={advertTypeName} />

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
