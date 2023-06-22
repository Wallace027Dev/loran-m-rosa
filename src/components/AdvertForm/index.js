import { forwardRef } from 'react';
import { useState, useImperativeHandle } from 'react';

import { Form } from './styles';

import FormGroup from '../FormGroup';
import Select from '../Select';

const AdvertForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [isSubmitting, setIsSubmitting] = useState('');

  const [userName, setUserName] = useState('');
  const [advertTypeId, setAdvertTypeId] = useState('');
  const [advertTypeName, setAdvertTypeName] = useState('');
  const [reportId, setReportId] = useState('');
  const [reportName, setReportName] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [likes, setLikes] = useState('');
  const [valueUsed, setValueUsed] = useState('');
  const [views, setViews] = useState('');
  const [linkClicks, setLinkClicks] = useState('');
  const [costPerResult, setCostPerResult] = useState('');
  const [recordsStarted, setRecordsStarted] = useState('');

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (adverts) => {
        setUserName(adverts.userName || '');
        setAdvertTypeId(adverts.advertTypeId || '');
        setAdvertTypeName(adverts.advertTypeName || '');
        setReportId(adverts.reportId || '');
        setReportName(adverts.reportName || '');
        setReportDate(adverts.reportDate || '');
        setCreatedAt(adverts.createdAt || '');
        setLikes(adverts.likes || '');
        setValueUsed(adverts.valueUsed || '');
        setViews(adverts.views || '');
        setLinkClicks(adverts.linkClicks || '');
        setCostPerResult(adverts.costPerResult || '');
        setRecordsStarted(adverts.recordsStarted || '');
      },
    }),
    []
  );

  return (
    <Form>
      <FormGroup>
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
      </FormGroup>
    </Form>
  );
});

export default AdvertForm;
