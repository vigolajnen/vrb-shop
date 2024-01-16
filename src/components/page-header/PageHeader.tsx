import { FC, useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';

import Logo from '../logo/Logo';
import PageHeaderCity from './PageHeaderCity';

import styles from './styles.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

const PageHeader: FC = () => {
  const theme = useContext(ThemeContext);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState<{ isSticky: boolean; offset: number }>({
    isSticky: false,
    offset: 0,
  });
  const handleScroll = (elTopOffset: number, elHeight: number): void => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    const header = headerRef.current?.getBoundingClientRect();
    const handleScrollEvent = (): void => {
      handleScroll(header?.top || 0, header?.height || 0);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header
      ref={headerRef}
      className={
        sticky.isSticky
          ? cn(styles.header, 'sticky-top p-2 py-4')
          : cn(styles.header, 'p-2 py-4')
      }
    >
      <Container className="d-flex justify-content-between align-items-center">
        <div className="text-uppercase d-none d-sm-block">рядом с домом</div>
        <PageHeaderCity />
        <Logo styles={styles.logo} />
      </Container>
    </header>
  );
};

export default PageHeader;
