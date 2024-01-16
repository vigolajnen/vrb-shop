import { FC, MouseEvent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import cn from 'classnames';

import { useModal } from '../../../hooks/useModal';

import styles from './styles.module.scss';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorsFallback from '../../errors-fallback/ErrorsFallback';

interface IAppModalProps {
  onClose: () => void;
  children: ReactNode;
  title: string;
  style?: string;
}

const AppModal: FC<IAppModalProps> = ({ onClose, children, title, style }) => {
  const modalRoot = document.getElementById('modals');
  const { closeModal, isModalOpen, openModal } = useModal();
  const navigate = useNavigate();

  const handelClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    openModal();
    onClose = () => {
      navigate(-1);
      closeModal();
    };
  }, [onClose, closeModal]);

  return (
    isModalOpen &&
    createPortal(
      <Modal
        onHide={onClose}
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={cn(styles.body)}
      >
        <Modal.Dialog className={style}>
          <Modal.Header className={styles.header}>
            <Modal.Title className={styles.title}>{title}</Modal.Title>
            <CloseButton onClick={onClose} className={styles.close} />
          </Modal.Header>
          <ErrorBoundary FallbackComponent={ErrorsFallback}>
            <Modal.Body onClick={handelClick}>{children}</Modal.Body>
          </ErrorBoundary>
        </Modal.Dialog>
      </Modal>,
      modalRoot!,
    )
  );
};

export default AppModal;
