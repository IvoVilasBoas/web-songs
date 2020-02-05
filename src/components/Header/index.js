import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import SelectLanguages from './SelectLanguages';

import Auth from './../Auth/index';
import Nav from './../Nav/';
import Modal from '../HtmlElements/Modal';

const Wrapper = styled('header')`
  width: 86%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 3;
`;

export const Header = ({ t }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Wrapper>
        <SelectLanguages t={t} />
        <Nav setModal={setModal} t={t} />
      </Wrapper>
      {modal === 'login' && (
        <Modal onClose={() => setModal(false)}>
          <Auth type="login" />
        </Modal>
      )}
      {modal === 'register' && (
        <Modal onClose={() => setModal(false)}>
          <Auth type="register" />
        </Modal>
      )}
    </>
  );
};

Header.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('common')(Header);
