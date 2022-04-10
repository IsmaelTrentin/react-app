import React from 'react';
import useStyles from './styles';
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
  const { classes } = useStyles();
  const nodeRef = useRef<HTMLDivElement>(null);

  return createPortal(
    <CSSTransition
      timeout={300}
      unmountOnExit
      classNames={{
        enter: classes['bg-enter'],
        enterActive: classes['bg-enter-active'],
        exit: classes['bg-exit'],
        exitActive: classes['bg-exit-active']
      }}
      in={visible}
      onExited={onClose}
      nodeRef={nodeRef}>
      <div
        className={classes.bg}
        ref={nodeRef}>
        {children &&
          <div className={classes.wrapper}>
            <div ref={ref} className={!noContainer ? classes.modal : classes['modal-no-container']}>
              <div className={classes.x}>
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