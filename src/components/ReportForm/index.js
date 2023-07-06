import PropTypes from 'prop-types';
import { forwardRef, useState, useImperativeHandle } from 'react';

import { Form } from './styles';

import Button from '../Button';

const ReportForm = forwardRef(
  ({ buttonLabel, onSubmit, typeList, isLoading }, ref) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [userId, setUserId] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [advertId, setAdvertId] = useState('');

    const isFormValid = typeList;

    useImperativeHandle(
      ref,
      () => ({
        setFieldsValues: (advert) => {
          setUserId(advert.userId || '');
          setCreatedAt(advert.createdAt || '');
          setAdvertId(advert.advertId || '');
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
        <Button
          type="submit"
          disabled={!isFormValid || isLoading}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </Form>
    );
  }
);

ReportForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReportForm;
