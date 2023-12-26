import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import { isCheckBirthDay, maxValueDate } from '../../utils/form';

import styles from './styles.module.scss';

const StepTwoInner: FC<any> = ({ data, item }) => {
  const maxDate = maxValueDate().toString();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Имя</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              placeholder="Имя"
              id="firstName"
              value={data.firstName}
              readOnly
              className={styles.control}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Group className="mb-3">
            <Form.Label className={styles.label}>Фамилия</Form.Label>
            <Form.Control
              type="text"
              placeholder="Фамилия"
              className={styles.control}
              id="lastName"
              {...register('lastName', {
                required: true,
              })}
            />
            {errors.lastName && (
              <Form.Text className="text-danger">error lastName</Form.Text>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Выберите клуб</Form.Label>
        <Form.Select
          aria-label="Выберите клуб"
          className={styles.control}
          {...register('club_id', {
            required: true,
          })}
        >
          <option disabled value="">
            Выберете клуб
          </option>
          {item?.clubs.length > 0
            ? [...item.clubs].map(el => (
                <option value={el.id} key={el.address}>
                  {el.address}
                </option>
              ))
            : null}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Номер телефона</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          className={styles.control}
          id="phone"
          value={data.phone}
          readOnly
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Дата рождения</Form.Label>
        <Form.Control
          type="date"
          className={styles.control}
          id="customer_birth_day"
          min="1900-01-01"
          max={maxDate}
          onKeyDown={e => e.preventDefault()}
          {...register('birth_day', {
            required: true,
            validate: {
              inputBirthDayRequired: isCheckBirthDay,
            },
          })}
        />
        {errors.birth_day && (
          <Form.Text className="text-danger">error birth_day</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          className={styles.control}
          id="email"
          {...register('email', {
            required: true,
          })}
        />
        {errors.email && (
          <Form.Text className="text-danger">error email</Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default StepTwoInner;
