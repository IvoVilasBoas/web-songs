import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { i18n } from 'utils/with-i18next';
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

export function SelectLanguages({ t }) {
  const [select, setSelect] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(select);
    !select ? setSelect(i18n.language) : null;
  }, [select]);

  const handleSelect = (ev, language) => {
    ev.preventDefault();
    setSelect(language);
  };

  return (
    <ListItem>
      <ButtonLink href="#" onClick={ev => handleSelect(ev, 'en')} onTouchEnd={ev => handleSelect(ev, 'en')}>
        <ItemLink active={select && select === 'en'}>{t('languages.en')}</ItemLink>
      </ButtonLink>
      <ButtonLink href="#" onClick={ev => handleSelect(ev, 'pt')} onTouchEnd={ev => handleSelect(ev, 'pt')}>
        <ItemLink active={select && select === 'pt'}>{t('languages.pt')}</ItemLink>
      </ButtonLink>
    </ListItem>
  );
}

SelectLanguages.propTypes = {
  t: PropTypes.func,
};

export default SelectLanguages;
