import { Alert } from 'react-bootstrap';
import { useErrorBoundary } from 'react-error-boundary';

export default function ErrorsFallback({ error }: any) {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div className="p-2">
      <Alert
        variant="danger"
        className="w-100 d-flex flex-wrap justify-content-center justify-content-sm-between gap-3 text-center text-sm-start"
      >
        <div>
          <strong>Ошибка:</strong>
          <div>{error.message}</div>
        </div>
        <button className="btn btn-danger rounded-pill" onClick={resetBoundary}>
          Попробуйте еще раз
        </button>
      </Alert>
    </div>
  );
}
