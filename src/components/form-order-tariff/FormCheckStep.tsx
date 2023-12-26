import { FC } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';

const FormCheckStep: FC<any> = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Form.Check type={'checkbox'} id={`checkbox`}>
        <Form.Check.Input
          type={'checkbox'}
          {...register('isCheck', {
            required: true,
          })}
        />
        <Form.Check.Label className={styles.labelCheck}>
          Я ознакомлен(-на) и согласен(-на) с условиями{' '}
          <Link to="/" className={styles.link} target="_blank" rel="noreferrer">
            Договора Оферты
          </Link>
          ,{' '}
          <Link to="/" className={styles.link} target="_blank" rel="noreferrer">
            Правилами Клуба
          </Link>{' '}
          и даю своё согласие на{' '}
          <Link to="/" className={styles.link} target="_blank" rel="noreferrer">
            обработку персональных данных
          </Link>
          .
        </Form.Check.Label>
        {errors.isCheck && (
          <Form.Text className="text-danger">error isCheck </Form.Text>
        )}
      </Form.Check>
    </>
  );
};

export default FormCheckStep;
