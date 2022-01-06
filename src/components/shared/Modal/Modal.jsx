import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import './Modal.scss';
import { useHistory, Link } from 'react-router-dom';
import propTypes, { array, object } from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({
  children,
  urlHandleClose,
  stylesAbsoluteModal,
}) {
  const history = useHistory();

  const onPressKey = event => {
    if (event.code === 'Escape') history.push(urlHandleClose);
  };

  const onClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) history.push(urlHandleClose);
  };

  useEffect(() => {
    window.addEventListener('keydown', onPressKey);
    return () => window.removeEventListener('keydown', onPressKey);
  }, []);

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={onClickOverlay} className="overlayModal">
      <div
        className={
          stylesAbsoluteModal
            ? 'modalTemplate modalTemplateExtra'
            : 'modalTemplate'
        }
      >
        {children}
        <Link to={urlHandleClose} className="modalClose">
          <AiOutlineClose />
        </Link>
      </div>
    </div>,
    document.querySelector('#root-modal'),
  );
}

Modal.propTypes = {
  children: propTypes.oneOfType([array, object]).isRequired,
  urlHandleClose: propTypes.string.isRequired,
  stylesAbsoluteModal: propTypes.bool.isRequired,
};
