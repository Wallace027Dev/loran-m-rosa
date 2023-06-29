import { forwardRef, useImperativeHandle, useState } from 'react';
import Input from '../Input';
import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';

const AdvertInputOptions = forwardRef((props, ref) => {
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

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const advertTypeName = props.advertTypeName;
  const notExistAdvertType = !advertTypeName;

  function handleValueUsed(e) {
    setValueUsed(e.target.value);
    if (!e.target.value) {
      setError({ field: 'valueUsed', message: 'Valor inválido.' });
    } else {
      removeError('valueUsed');
    }
  }

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (adverts) => {
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

  if (advertTypeName === 'RECOGNITION') {
    return (
      <div>
        <FormGroup error={getErrorMessageByFieldName('valueUsed')}>
          <Input
            type="text"
            value={valueUsed}
            onChange={handleValueUsed}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
            error={getErrorMessageByFieldName('valueUsed')}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizaram o Anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
  if (advertTypeName === 'TRAFFIC') {
    return (
      <div>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            onChange={(e) => linkClicks(e.target.value)}
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => linkClicks(e.target.value)}
            placeholder="Cliques no link..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
  if (advertTypeName === 'RECEIVE_MESSAGES') {
    return (
      <div>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Mensagens iníciadas..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
  if (advertTypeName === 'GET_PAGE_LIKES') {
    return (
      <div>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Curtidas..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
  if (advertTypeName === 'BOOST_PUBLICATION') {
    return (
      <div>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Engajamento..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Curtidas na publicação..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Comentários..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
  if (advertTypeName === 'RECORDS') {
    return (
      <div>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Cadastros iniciados..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
  if (advertTypeName === 'SALES') {
    return (
      <div>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Custos por resultado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Visualizarações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            onChange={(e) => setValueUsed(e.target.value)}
            placeholder="Visualizações de conteúdo..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Cliques no link..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Adições ao carrinho..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            placeholder="Compras iniciadas..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            onChange={(e) => setLinkClicks(e.target.value)}
            placeholder="Total de vendas..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
});

export default AdvertInputOptions;
