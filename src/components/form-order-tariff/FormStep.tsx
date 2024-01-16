import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import cn from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';

import StepOneInner from './StepOneInner';
import StepTwoInner from './StepTwoInner';
import StepThreeInner from './StepThreeInner';
import FormCheckStep from './FormCheckStep';
import { useActions } from '../../hooks/useActions';

import { orderData } from '../../utils/form';
import { useCreateOrderMutation } from '../../store/slices/orderSlice';
import ErrorsFallback from '../errors-fallback/ErrorsFallback';
import ButtonGradient from '../UI/button-gradient/ButtonGradient';

import styles from './styles.module.scss';

interface IFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birth_day: string;
  club_id: string;
  isCheck: boolean;
}

const initialState: IFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  birth_day: '',
  club_id: '',
  isCheck: false,
};

const FormStep: FC<any> = ({ item }) => {
  const [validated, setValidated] = useState(false);
  // console.log('11', item);
  const {
    getProductsPosition,
    getClubsPositions,
    getProductsPositionFirstPay,
    getFormData,
    getCustomer,
  } = useActions();

  const [createOrder] = useCreateOrderMutation();

  const STEPS: number[] = [1, 2, 3];
  const [btnBackDisabled, setBtnBackDisabled] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<IFormData>(initialState);
  const [idProduct, setIdProduct] = useState('');
  const methods = useForm({
    mode: 'onTouched',
  });
  const {
    formState: { isValid, isDirty },
    watch,
    reset,
  } = methods;

  const currentStep = () => {
    setStep(cur => cur + 1);
  };
  const currentStepBack = () => {
    setStep(cur => cur - 1);
  };

  const back = (values: any) => {
    values = watch();
    setData(values);
    currentStepBack();
    getFormData(watch());
    setValidated(false);
    console.log(isValid, isDirty);
  };

  const next = (values: any) => {
    values = watch();
    setData(values);
    currentStep();
    getFormData(watch());

    if (step === 2) {
      setValidated(true);
      orderData(data, values, item);
      setIdProduct(values.club_id);
    }
  };

  const handleSubmit = (values: any) => {
    setBtnBackDisabled(true);

    values = watch();

    getFormData(watch());
    getCustomer();
    getClubsPositions(item.clubs);
    getProductsPosition(item);
    getProductsPositionFirstPay(values.club_id);

    setValidated(true);

    const allDataForm = orderData(data, values, item);
    createOrder(allDataForm);
    console.log(allDataForm);

    reset();
    setData(initialState);
    setStep(3);
    setValidated(false);
  };

  const renderButton = () => {
    if (step > 3) {
      return null;
    } else if (step === 3) {
      return (
        <ErrorBoundary FallbackComponent={ErrorsFallback}>
          <ButtonGradient
            onClick={handleSubmit}
            outline={true}
            style="w-100 d-block"
            {...{
              type: 'button',
              disabled: !isValid || !isDirty,
            }}
          >
            Оплатить
          </ButtonGradient>
        </ErrorBoundary>
      );
    } else {
      return (
        <div className="d-flex flex-grow-1">
          <ButtonGradient
            onClick={next}
            outline={true}
            style="w-100 d-block"
            {...{
              type: 'button',
              disabled: !isValid || !isDirty,
            }}
          >
            {step === 1 ? 'Вперед' : 'Далее'}
          </ButtonGradient>
        </div>
      );
    }
  };

  return (
    <>
      <div className={styles.stepper}>
        {STEPS.map(el => (
          <div
            key={el}
            className={
              el <= step
                ? cn(styles.stepperItem, styles.active)
                : styles.stepperItem
            }
          >
            <span>{el}</span>
          </div>
        ))}
      </div>
      <FormProvider {...methods}>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="form-order-tariff"
        >
          {step >= 1 && (
            <div className={step === 1 ? '' : 'd-none'}>
              <StepOneInner />
            </div>
          )}
          {step >= 2 && (
            <div className={step === 2 ? '' : 'd-none'}>
              <StepTwoInner data={data} item={item} />
            </div>
          )}
          {step >= 3 && (
            <div className={step === 3 ? '' : 'd-none'}>
              <StepThreeInner price={item.price} id={idProduct} item={item} />
            </div>
          )}

          <div className="d-flex gap-3 w-100">
            {step >= 2 && (
              <ButtonGradient
                onClick={back}
                outline={true}
                {...{
                  type: 'button',
                  disabled: step === 3 && btnBackDisabled ? true : false,
                }}
              >
                &larr;
              </ButtonGradient>
            )}

            {renderButton()}
          </div>

          {step <= 2 && (
            <div className={step === 2 || step === 1 ? '' : 'd-none'}>
              <FormCheckStep />
            </div>
          )}

          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </Form>
      </FormProvider>
    </>
  );
};

export default FormStep;
