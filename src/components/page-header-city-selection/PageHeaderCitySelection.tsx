import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export interface IHeaderCitySelectionProps {
  city: string;
  onClickLinkNo: () => void;
}

const HeaderCitySelection: FC<IHeaderCitySelectionProps> = ({
  city,
  onClickLinkNo,
}) => {
  const [open, setOpen] = useState(false);
  const localStorageCity: string | null = localStorage.getItem('city');

  const onHandleClickLinkYes = () => {
    setOpen(false);
    localStorage.setItem('city', city);
  };
  const onHandleClickLinkNo = () => {
    setOpen(false);
    onClickLinkNo();
  };

  useEffect(() => {
    localStorageCity === null && setOpen(true);
  }, [localStorageCity]);
  return (
    <>
      {open && (
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Ваш город {city}?</h3>

          <div className={styles.inner}>
            <button
              className={cn(styles.btn, styles.active)}
              onClick={onHandleClickLinkYes}
            >
              Да
            </button>
            <button className={styles.btn} onClick={onHandleClickLinkNo}>
              Нет
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderCitySelection;
