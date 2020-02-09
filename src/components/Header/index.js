import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import SelectLanguages from './SelectLanguages';
import Nav from './../Nav/';
import Modal from './../Modal';

const Wrapper = styled('header')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 3;
`;

export const Header = ({ t }) => {
  const [modal, setModal] = useState('');
  const [logged, setLogged] = useState(false);
  const [goTo, setGoTo] = useState('');

  function handleClick(option) {
    console.log('handClick Option: ', option);
    switch (option) {
      case 'signUp':
        setModal('signUp');
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
    console.log('handleClick Modal: ', modal);
    console.log('handleClick Logged: ', logged);
    console.log('handleClick GoTo: ', goTo);
  }

  return (
    <>
      <Wrapper>
        <SelectLanguages t={t} />
        <Nav logged={logged} t={t} handleClick={handleClick} />

        {modal === 'login' && <Modal onClose={() => setModal(false)} handleClick={handleClick} type={'login'} />}
        {modal === 'signUp' && <Modal onClose={() => setModal(false)} handleClick={handleClick} type={'signUp'} />}
      </Wrapper>
    </>
  );
};

Header.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('common')(Header);
