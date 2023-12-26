import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import cn from 'classnames';

import styles from './styles.module.scss';
import StepOneInner from './StepOneInner';
import StepTwoInner from './StepTwoInner';
import { orderData } from '../../utils/form';
import StepThreeInner from './StepThreeInner';
import FormCheckStep from './FormCheckStep';
import { orderRequest, requestOptions } from '../../utils/query';

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
  const STEPS: number[] = [1, 2, 3];
  const [step, setStep] = useState(1);
  const [data, setData] = useState<IFormData>(initialState);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      loadState: 'unloaded',
      initialState: [initialState],
    },
  });
  const {
    formState: { isValid },
    watch,
    reset,
  } = methods;

  const currentStep = () => {
    setStep(cur => cur + 1);
  };

  const next = (values: any) => {
    values = watch();
    setData(values);
    currentStep();
    console.log('values', watch());
  };

  const handleSubmit = (values: any) => {
    values = watch();
    const allDataForm = orderData(data, values, item);
    console.log(allDataForm);
    orderRequest('orders', requestOptions(allDataForm))
      .then((result: any) => {
        if (result.pay_url) {
          window.location = result.pay_url;
        }
      })
      .catch((error: any) => console.log('error', error));

    reset();
    setData(initialState);
    currentStep();
  };

  const renderButton = () => {
    if (step > 2) {
      return null;
    } else if (step === 2) {
      return (
        <button
          type="button"
          className={cn(styles.buttonNext, 'w-100 my-2 mb-4 p-3')}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Оплатить
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={next}
          className={cn(styles.buttonNext, 'w-100 my-2 mb-4 p-3')}
          disabled={!isValid}
        >
          Далее
        </button>
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
        <Form noValidate onSubmit={handleSubmit}>
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
              <StepThreeInner />
            </div>
          )}
          {renderButton()}
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
