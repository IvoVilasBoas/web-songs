import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { i18n } from 'utils/with-i18next';
import { color } from '../../../public/static/utils/colors';
import { MEDIA_SIZES } from '../../../public/static/utils/mediaSizes';

const ListItem = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  @media only screen and (max-width: ${MEDIA_SIZES.MD_MAX}) {
    display: none;
  }
`;

const ItemLink = styled('a')`
  color: ${color.BLACK};
  font-size: 14px;
  outline: none;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  &:hover {
    cursor: pointer;
    color: ${color.PRIMARY};
    font-weight: bold;
  }
`;

const ButtonLink = styled('button')`
  padding: 0;
  background: inherit;
  border: none;
  color: ${color.BLACK};
  margin-left: 10px;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${color.PRIMARY};
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
