import { FC, useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import cn from 'classnames';

import {
  isCheckBirthDay,
  maxValueDate,
  minValueDate,
  validateEmail,
} from '../../utils/form';

import styles from './styles.module.scss';
import FormTooltipBirthDay from '../form-tooltip-birth-day/FormTooltipBirthDay';
import { CityContext } from '../../context/CityContext';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ROUTERS } from '../../utils/routes';
import { getTariffData } from '../../utils/tariffs';

const StepTwoInner: FC<any> = ({ data, item }) => {
  const maxDate = maxValueDate().toString();
  const minDate = minValueDate().toString();
  const pageCity = useContext(CityContext);
  const { tariffsActiveTab, clubsMC } = useTypedSelector(state => state.price);
  const isTextSpb =
    pageCity === ROUTERS.spb.name &&
    (tariffsActiveTab.toLocaleLowerCase() === 'с бассейном' ||
      item.type === 'mc_full');

  const dataTariffsMC: any = [];
  clubsMC.length > 0
    ? dataTariffsMC.push(getTariffData(clubsMC, ['mc_full']))
    : null;
  // const dataMC = dataTariffsMC.flat(Infinity);
  const clubsDataMC = dataTariffsMC.flat(Infinity)[0]?.clubs;

  if (item.type === 'mc_full') {
    item.clubs = clubsDataMC;
    item.countClubs = clubsDataMC.length;
  }
  // console.log('dataMC', dataMC);
  // console.log('item', item);

  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setFocus('lastName');
  }, [setFocus]);

  if (!data) {
    throw new Error('Нет данных');
  }
  if (!item) {
    throw new Error('Нет данных');
  }

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
              className={
                errors.lastName
                  ? cn(styles.control, 'form-control is-invalid')
                  : cn(styles.control, 'form-control')
              }
              id="lastName"
              required
              {...register('lastName', {
                required: true,
                minLength: 2,
              })}
            />
            {errors.lastName && (
              <Form.Text className="text-danger">
                Пожалуйста, введите вашу фамилию
              </Form.Text>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Выберите клуб</Form.Label>
        {isTextSpb && (
          <small className="mb-1 d-flex">
            Кроме клубов Фитнес Хаус Престиж (ул. Барочная, д.10/2Б, ул. Я.
            Гашека, 17А, Шереметьевская ул., 13А)
          </small>
        )}
        <Form.Select
          aria-label="Выберите клуб"
          className={
            errors.club_id
              ? cn(styles.control, 'form-control is-invalid')
              : cn(styles.control, 'form-control')
          }
          required
          {...register('club_id', {
            required: true,
          })}
        >
          <option value="">Выберете клуб</option>
          {item?.clubs.length > 0
            ? [...item.clubs].map(el => (
                <option value={el.id} key={el.address}>
                  {el.address}
                </option>
              ))
            : null}
        </Form.Select>
        {errors.club_id && (
          <Form.Text className="text-danger">
            Пожалуйста, выберите клуб
          </Form.Text>
        )}
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
        <Form.Label className={styles.label}>
          Дата рождения <FormTooltipBirthDay />
        </Form.Label>
        <Form.Control
          type="date"
          className={
            errors.birth_day
              ? cn(styles.control, 'form-control is-invalid')
              : cn(styles.control, 'form-control')
          }
          id="customer_birth_day"
          min={minDate}
          max={maxDate}
          required
          {...register('birth_day', {
            required: true,
            min: minDate,
            max: maxDate,
            validate: {
              inputBirthDayRequired: isCheckBirthDay,
            },
          })}
        />
        {errors.birth_day && (
          <Form.Text className="text-danger">
            Пожалуйста, введите вашу дату рождения
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          className={
            errors.email
              ? cn(styles.control, 'form-control is-invalid')
              : cn(styles.control, 'form-control')
          }
          id="email"
          required
          {...register('email', {
            required: true,
            validate: {
              inputEmailRequired: validateEmail,
            },
          })}
        />
        {errors.email && (
          <Form.Text className="text-danger">
            Пожалуйста, введите ваш email
          </Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default StepTwoInner;
