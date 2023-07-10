import { forwardRef, useImperativeHandle, useState } from 'react';

import Input from '../Input';
import Button from '../Button';
import { Form } from './styles';

import useErrors from '../../hooks/useErrors';
import FormGroup from '../FormGroup';

const AdvertInputOptions = forwardRef(({ typeList, onSubmit }, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportDate, setReportDate] = useState('');
  const [likes, setLikes] = useState(0);
  const [contentViews, setContentViews] = useState(0);
  const [valueUsed, setValueUsed] = useState(0);
  const [views, setViews] = useState(0);
  const [linkClicks, setLinkClicks] = useState(0);
  const [costPerResult, setCostPerResult] = useState(0);
  const [engagement, setEngagement] = useState(0);
  const [recordsStarted, setRecordsStarted] = useState(0);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = reportDate && errors.length === 0;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (advert) => {
        setReportDate(advert.reportDate || 0);
        setLikes(advert.likes || 0);
        setContentViews(advert.contentViews || 0);
        setValueUsed(advert.valueUsed || 0);
        setViews(advert.views || 0);
        setLinkClicks(advert.linkClicks || 0);
        setCostPerResult(advert.costPerResult || 0);
        setEngagement(advert.engagement || 0);
        setRecordsStarted(advert.recordsStarted || 0);
      },
    }),
    []
  );

  function handleReportDate(e) {
    setReportDate(e.target.value);
    if (!e.target.value) {
      setError({ field: 'input-date-error', message: 'Valor inválido.' });
    } else {
      removeError('input-date-error');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      reportDate,
      likes,
      contentViews,
      valueUsed,
      views,
      linkClicks,
      costPerResult,
      engagement,
      recordsStarted,
    });

    setIsSubmitting(false);
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('input-date-error')}>
        <Input
          type="date"
          value={reportDate || ''}
          onChange={handleReportDate}
          error={getErrorMessageByFieldName('input-date-error')}
        />
      </FormGroup>
      {typeList === 'RECOGNITION' && (
        <div>
          <Input
            type="number"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
          />
          <Input
            type="number"
            value={contentViews}
            onChange={(e) => setContentViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
          />
          <Input
            type="number"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizaram o Anúncio..."
          />
        </div>
      )}
      {typeList === 'TRAFFIC' && (
        <div>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
          />
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            onChange={(e) => setViews(e.target.value)}
          />
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Cliques no link..."
          />
        </div>
      )}
      {typeList === 'RECEIVE_MESSAGES' && (
        <div>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
          />
          <Input
            type="text"
            value={contentViews}
            onChange={(e) => setContentViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
          />
          <Input
            type="text"
            value={recordsStarted}
            onChange={(e) => setRecordsStarted(e.target.value)}
            placeholder="Mensagens iníciadas..."
          />
        </div>
      )}
      {typeList === 'GET_PAGE_LIKES' && (
        <div>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
          />
          <Input
            type="text"
            value={contentViews}
            onChange={(e) => setContentViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
          />
          <Input
            type="text"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            placeholder="Curtidas..."
          />
        </div>
      )}
      {typeList === 'BOOST_PUBLICATION' && (
        <div>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
          />
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
          />
          <Input
            type="text"
            value={engagement}
            onChange={(e) => setEngagement(e.target.value)}
            placeholder="Engajamento..."
          />
          <Input
            type="text"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            placeholder="Curtidas na publicação..."
          />
          <Input
            type="text"
            value={recordsStarted}
            onChange={(e) => setRecordsStarted(e.target.value)}
            placeholder="Comentários..."
          />
        </div>
      )}
      {typeList === 'RECORDS' && (
        <div>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
          />
          <Input
            type="text"
            value={contentViews}
            onChange={(e) => setContentViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
          />
          <Input
            type="text"
            value={recordsStarted}
            onChange={(e) => setRecordsStarted(e.target.value)}
            placeholder="Cadastros iniciados..."
          />
        </div>
      )}
      {typeList === 'SALES' && (
        <div>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
          />
          <Input
            type="text"
            value={costPerResult}
            onChange={(e) => setCostPerResult(e.target.value)}
            placeholder="Custos por resultado..."
          />
          <Input
            type="text"
            value={contentViews}
            onChange={(e) => setContentViews(e.target.value)}
            placeholder="Visualizarações do anúncio..."
          />
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Visualizações de conteúdo..."
          />
          <Input
            type="text"
            value={engagement}
            onChange={(e) => setEngagement(e.target.value)}
            placeholder="Cliques no link..."
          />
          <Input
            type="text"
            value={recordsStarted}
            onChange={(e) => setRecordsStarted(e.target.value)}
            placeholder="Adições ao carrinho..."
          />
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Compras iniciadas..."
          />
        </div>
      )}

      <Button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        isLoading={isSubmitting}
      >
        Atualizar anúncio
      </Button>
    </Form>
  );
});

export default AdvertInputOptions;
