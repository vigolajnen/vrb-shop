import { FC } from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../logo/Logo';

import styles from './styles.module.scss';

interface IDocumentLinks {
  name: string;
  url: string;
}

const PageFooter: FC = () => {
  const documentLinks: IDocumentLinks[] = [
    {
      name: 'Cоглашение на обработку персональных данных',
      url: 'https://market.fitnesshouse.ru/storage/documents/legal_information.pdf',
    },
    {
      name: 'Правила техники безопасности',
      url: 'https://market.fitnesshouse.ru/storage/documents/pravila_tehniki_bezopasnosti.pdf',
    },
    {
      name: 'Договор Оферты',
      url: 'https://market.fitnesshouse.ru/documentation',
    },
  ];

  return (
    <footer className={cn(styles.footer, 'p-2 py-4')}>
      <Container>
        <Logo styles="my-4" />
        <p className="my-4">
          Все размещенные на сайте сведения носят информационный характер и ни
          при каких условиях не являются офертой по смыслу ст. 435 ГК РФ и не
          являются публичной офертой по смыслу ст. 437 ГК РФ, если иное прямо не
          указано.
        </p>
        <hr />
        <div className="my-2">
          <Row>
            {documentLinks.map((el, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <a
                  href={el.url}
                  className={cn(styles.link, 'p-2 d-flex text-decoration-none')}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.name}
                </a>
              </Col>
            ))}
            <Col className="">
              <div>© 2007 - 2023.</div>
              <div>Все права защищены.</div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default PageFooter;
