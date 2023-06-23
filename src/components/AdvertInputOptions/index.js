import { forwardRef, useImperativeHandle, useState } from 'react';
import Input from '../Input';
import FormGroup from '../FormGroup';

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

  const advertTypeName = props.advertTypeName;
  const notExistAdvertType = !advertTypeName;

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
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
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
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
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
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
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
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
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
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            placeholder="Engajamento..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Curtidas na publicação..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
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
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
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
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Custos por resultado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            placeholder="Visualizarações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            placeholder="Visualizações de conteúdo..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Cliques no link..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            placeholder="Adições ao carrinho..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Compras iniciadas..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            placeholder="Total de vendas..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
  if (advertTypeName === 'RECOGNITION') {
    return (
      <div>
        <FormGroup>
          <Input
            type="text"
            value={valueUsed}
            placeholder="Valor usado..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={views}
            placeholder="Visualizações do anúncio..."
            disabled={notExistAdvertType}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            value={linkClicks}
            placeholder="Cliques no link"
            disabled={notExistAdvertType}
          />
        </FormGroup>
      </div>
    );
  }
});

export default AdvertInputOptions;
