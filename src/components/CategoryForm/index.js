import PropTypes from 'prop-types';
import { useState, forwardRef, useImperativeHandle } from 'react';

import useErrors from '../../hooks/useErrors';

import { Form } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';

const CategoryForm = forwardRef(({ buttonLabel, onSubmit, }, ref) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName
  } = useErrors();

  const isFormValid = (name && useErrors.length === 0);

  useImperativeHandle(ref, () => ({
    setFieldsValues: (category) => {
      category(category.name ?? '');
    },

    resetFields: () => {
      setName('');
    }
  }), []);

  function handleNameChange(e) {
    setName(e.target.value);
    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    };
  };

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
    })

    setIsSubmitting(false);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          value={name}
          placeholder="Nome *"
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <Button
        type="submit"
        disabled={!isFormValid}
        isLoading={isSubmitting}
      >
        {buttonLabel}
      </Button>
    </Form>
  );

});

CategoryForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryForm;
