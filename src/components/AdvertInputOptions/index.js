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

  let value1 = null;
  let value2 = null;
  let value3 = null;
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
