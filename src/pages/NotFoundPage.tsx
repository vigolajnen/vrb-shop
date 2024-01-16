import { Link } from 'react-router-dom';

import MetaData from '../components/SEO/meta-data/MetaData';
import Logo from '../images/logo.svg?react';

export default function NotFoundPage() {
  return (
    <>
      <MetaData
        title="Fitness House | Нет такой страницы."
        description="Нет такой страницы."
      />
      <div className="d-flex flex-column min-vh-100 p-4 text-white">
        <Logo
          width={160}
          height={27}
          className="d-inline-flex w-48 max-w-full  px-4 mx-auto"
        />
        <main className="d-flex flex-column h-100 my-auto justify-content-center align-items-center container mx-auto ">
          <div className="pt-8 d-flex flex-column justify-center items-center align-middle text-center">
            <div className="fs-1 fw-bold uppercase mb-4">404</div>
            <h1 className="fs-1 fw-bold uppercase mb-4">Нет такой страницы</h1>
            <Link
              to="/"
              className="button p-4 my-4 fw-bold uppercase text-white rounded-xl hover:bg-lemon-chiffon-200"
            >
              Вернуться на главную
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
