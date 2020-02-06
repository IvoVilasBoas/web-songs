import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import SelectLanguages from './SelectLanguages';

import Nav from './../Nav/';

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
  const [modal, setModal] = useState('');
  const [logged, setLogged] = useState(true);
  const [goTo, setGoTo] = useState('');

  function handleClick(option) {
    console.log('handleClick Modal: ', modal);
    console.log('handleClick Logged: ', logged);
    console.log('handleClick GoTo: ', goTo);
    switch (option) {
      case 'register':
        setModal('register');
        break;
      case 'login':
        setModal('login');
        break;
      case 'profile':
        setGoTo('profile');
        break;
      case 'logout':
        setLogged(false);
        setGoTo('logout');
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Wrapper>
        <SelectLanguages t={t} />
        <Nav logged={logged} t={t} handleClick={handleClick} />
      </Wrapper>
    </>
  );
};

Header.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('common')(Header);
