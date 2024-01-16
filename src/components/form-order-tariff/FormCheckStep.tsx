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
          className={errors.isCheck ? 'is-invalid' : ''}
          {...register('isCheck', {
            required: true,
          })}
        />
        <Form.Check.Label className={styles.labelCheck}>
          Я ознакомлен(-на) и согласен(-на) с условиями{' '}
          <Link
            to="https://market.fitnesshouse.ru/storage/documents/oferta.pdf"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Договора Оферты
          </Link>
          ,{' '}
          <Link
            to="https://market.fitnesshouse.ru/storage/documents/pravila_cluba.pdf"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Правилами Клуба
          </Link>{' '}
          и даю своё согласие на{' '}
          <Link
            to="https://market.fitnesshouse.ru/storage/documents/legal_information.pdf"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            обработку персональных данных
          </Link>
          .
        </Form.Check.Label>
        {errors.isCheck && (
          <Form.Text className="text-danger">
            Пожалуйста, заполните поле
          </Form.Text>
        )}
      </Form.Check>
    </>
  );
};

export default FormCheckStep;
