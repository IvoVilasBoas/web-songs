import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { colorUtils } from '../../../public/static/utils/colors';

const ListItem = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const ItemLink = styled('a')`
  color: ${colorUtils.BLACK};
  font-size: 14px;
  outline: none;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  &:hover {
    cursor: pointer;
    color: ${colorUtils.PRIMARY};
    font-weight: bold;
  }
`;

const ButtonLink = styled('button')`
  padding: 0;
  background: inherit;
  border: none;
  color: ${colorUtils.BLACK};
  margin-left: 10px;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${colorUtils.PRIMARY};
  }
`;

const Nav = props => {
  const { t, handleClick, logged } = props;

  return (
    <>
      {logged ? (
        <ListItem>
          <ButtonLink href="#" onClick={() => handleClick('profile')} onTouchEnd={() => handleClick('profile')}>
            <ItemLink>{t('profile')}</ItemLink>
          </ButtonLink>
          <ButtonLink href="#" onClick={() => handleClick('logout')} onTouchEnd={() => handleClick('logout')}>
            <ItemLink>{t('logout')}</ItemLink>
          </ButtonLink>
        </ListItem>
      ) : (
        <ListItem>
          <ButtonLink href="#" onClick={() => handleClick('signUp')} onTouchEnd={() => handleClick('signUp')}>
            <ItemLink>{t('signUp')}</ItemLink>
          </ButtonLink>
          <ButtonLink href="#" onClick={() => handleClick('login')} onTouchEnd={() => handleClick('login')}>
            <ItemLink>{t('login')}</ItemLink>
          </ButtonLink>
        </ListItem>
      )}
    </>
  );
};

Nav.propTypes = {
  t: PropTypes.func,
  handleClick: PropTypes.func,
  logged: PropTypes.bool,
};

export default Nav;
