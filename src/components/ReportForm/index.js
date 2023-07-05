import PropTypes from 'prop-types';
import { forwardRef, useState, useImperativeHandle } from 'react';

import { Form } from './styles';

import Button from '../Button';

import AdvertInputOptions from '../AdvertInputOptions';

const ReportForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdAt, setCreatedAt] = useState('');
  const [userId, setUserId] = useState('');
  const [typeList, setTypeList] = useState('');

  const isFormValid = typeList;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (adverts) => {
        setUserId(adverts.userId || '');
        setTypeList(adverts.typeList || '');
        setCreatedAt(adverts.createdAt || '');
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
