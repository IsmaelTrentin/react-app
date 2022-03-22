import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import X from '../X';
import { MODAL_PORTAL_ID } from '../../util/constants';
import Logic from './index.logic';

export interface IModalProps {
  visible?: boolean;
  noContainer?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<IModalProps> = props => {
  const {
    visible = true,
    noContainer = false,
    children,
    onClose
  } = props;
  const { ref, close } = Logic(visible, onClose);
  const nodeRef = useRef<HTMLDivElement>(null);

  return createPortal(
    <CSSTransition
      timeout={300}
      unmountOnExit
      classNames={{
        enter: cx(styles['bg-enter'], styles['modal-enter']),
        enterActive: cx(styles['bg-enter-active'], styles['modal-enter-active']),
        exit: cx(styles['bg-exit'], styles['modal-exit']),
        exitActive: cx(styles['bg-exit-active'], styles['modal-exit-active'])
      }}
      in={visible}
      onExited={onClose}
      nodeRef={nodeRef}>
      <div
        className={styles.bg}
        ref={nodeRef}>
        {children &&
          <div className={styles.wrapper}>
            <div ref={ref} className={!noContainer ? styles.modal : styles['modal-no-container']}>
              <div className={styles.x}>
                <X onClick={close} />
              </div>
              {children}
            </div>
          </div>
        }
      </div>
    </CSSTransition>,
    document.getElementById(MODAL_PORTAL_ID) as HTMLDivElement);
};

export default Modal;