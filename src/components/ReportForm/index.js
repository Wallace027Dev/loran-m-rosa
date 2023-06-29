import PropTypes from 'prop-types';
import {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useRef,
} from 'react';

import { Form } from './styles';

import Button from '../Button';
import Input from '../Input';

import AdvertInputOptions from '../AdvertInputOptions';

import useErrors from '../../hooks/useErrors';
import AdvertsServices from '../../services/AdvertsServices';
import { useNavigate, useParams } from 'react-router-dom';
import toast from '../../utils/toast';

const ReportForm = forwardRef(({ buttonLabel, onSubmit, typeList }, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const isFormValid = typeList;

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
      <AdvertInputOptions advertTypeName={typeList} />

      <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
        {buttonLabel}
      </Button>
    </Form>
  );
});

ReportForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReportForm;
