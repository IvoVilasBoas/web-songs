import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Register from '../../containers/Auth/Register';
import Login from '../../containers/Auth/Login';
//import SongDetail from '../../containers/SongDetail';

const Wrapper = styled('section')`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cortain = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled('div')`
  z-index: 1;
  position: relative;
  width: 1082px !important;
  border-radius: 4px;
  background: white;
`;

const Modal = props => {
  const { onClose, type } = props;
  const [content, setContent] = useState(type);
  let modalContent = '';

  const handleContent = modal => {
    console.log('Modal HandleContent_ ', modal);
    setContent(modal);
  };

  switch (content) {
    case 'signUp':
      modalContent = <Register handleContent={handleContent} />;
      break;
    case 'login':
      modalContent = <Login handleContent={handleContent} />;
      break;
    default:
      break;
  }
  return (
    <Wrapper>
      <Cortain onClick={onClose} />
      <ModalContent>
        <div className="content">{modalContent}</div>
      </ModalContent>
    </Wrapper>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.string,
};

export default Modal;
