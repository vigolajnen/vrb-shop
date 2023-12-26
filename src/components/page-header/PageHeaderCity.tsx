import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import { CITIES_ROUTERS } from '../../utils';
import PageHeaderCitySelection from '../page-header-city-selection/PageHeaderCitySelection';

import styles from './styles.module.scss';

export interface ICity {
  url: string;
  name: string;
}

const PageHeaderCity: FC = () => {
  const localStorageCity: string | null = localStorage.getItem('city');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [nameCity, setNameCity] = useState('Самара');

  const onClickPoint = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const str: string = e.currentTarget.innerText.toLowerCase();
    setIsOpen(false);
    setNameCity(str[0].toUpperCase() + str.slice(1));
    localStorageCity === null && localStorage.setItem('city', str);
  };

  const city: ICity | undefined = CITIES_ROUTERS.find(
    (el: ICity) => el.url.slice(1, 4) === location.pathname.slice(1, 4),
  );

  useEffect(() => {
    city && setNameCity(city.name);
  }, [location, city]);

  return (
    <>
      <PageHeaderCitySelection
        city={nameCity}
        onClickLinkNo={() => {
          setIsOpen(true);
          console.log(isOpen);
        }}
      />
      <Dropdown>
        {/* <Button
          title={nameCity}
          style="dropdown-toggle"
          onClick={() => setIsOpen(prev => !prev)}
        /> */}
        <Dropdown.Toggle
          id="example1"
          variant="secondary"
          onClick={() => setIsOpen(prev => !prev)}
          className={styles.button}
        >
          {nameCity}
        </Dropdown.Toggle>

        <Dropdown.Menu show={isOpen}>
          <ul>
            {CITIES_ROUTERS.length > 0 &&
              [...CITIES_ROUTERS].map((city, index) => (
                <li key={index} className={styles.menuItem}>
                  <NavLink to={city.url} onClick={onClickPoint}>
                    {city.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default PageHeaderCity;
