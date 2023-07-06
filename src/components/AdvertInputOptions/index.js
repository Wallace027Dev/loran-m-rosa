import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Input from '../Input';
import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';

const AdvertInputOptions = forwardRef(({ typeList, advertData }, ref) => {
  const [reportId, setReportId] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [likes, setLikes] = useState('');
  const [contentViews, setContentViews] = useState('');
  const [valueUsed, setValueUsed] = useState('');
  const [views, setViews] = useState('');
  const [linkClicks, setLinkClicks] = useState('');
  const [costPerResult, setCostPerResult] = useState('');
  const [engagement, setEngagement] = useState('');
  const [recordsStarted, setRecordsStarted] = useState('');

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const notExistAdvertType = !reportDate;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (advert) => {
        setReportId(advert.id || 0);
        setCreatedAt(advert.createdAt || 0);
        setLikes(advert.likes || 0);
        setContentViews(advert.views || 0);
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

  if (typeList === 'RECOGNITION') {
    return (
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
          value={views}
          onChange={(e) => setViews(e.target.value)}
          placeholder="Visualizaram o Anúncio..."
        />
      </div>
    );
  }
  if (typeList === 'TRAFFIC') {
    return (
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
    );
  }
  if (typeList === 'RECEIVE_MESSAGES') {
    return (
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
    );
  }
  if (typeList === 'GET_PAGE_LIKES') {
    return (
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
    );
  }
  if (typeList === 'BOOST_PUBLICATION') {
    return (
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
    );
  }
  if (typeList === 'RECORDS') {
    return (
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
    );
  }
  if (typeList === 'SALES') {
    return (
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
    );
  }
});

export default AdvertInputOptions;
