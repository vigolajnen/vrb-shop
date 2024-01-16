import { FC, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormContext } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import cn from 'classnames';

import { isNotFilledTel } from '../../utils/form';

import styles from './styles.module.scss';

const StepOneInner: FC<any> = () => {
  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Имя</Form.Label>
        <Form.Control
          type="text"
          id="first_name"
          placeholder="Имя"
          className={
            errors.firstName
              ? cn(styles.control, 'form-control is-invalid')
              : cn(styles.control, 'form-control')
          }
          {...register('firstName', {
            required: true,
            minLength: 2,
          })}
        />
        {errors.firstName && (
          <Form.Text className="text-danger">
            Пожалуйста, введите ваше имя
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Номер телефона</Form.Label>
        <ReactInputMask
          id="phone"
          type="tel"
          className={
            errors.phone
              ? cn(styles.control, 'form-control is-invalid')
              : cn(styles.control, 'form-control')
          }
          mask="+7(999) 999-99-99"
          alwaysShowMask={true}
          {...register('phone', {
            validate: {
              inputTelRequired: isNotFilledTel,
            },
          })}
        />
        {errors.phone && (
          <Form.Text className="text-danger">
            Пожалуйста, введите ваш телефон
          </Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default StepOneInner;
