import React /*, { useState, useEffect } */ from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'utils/with-i18next';

import Slider from 'react-slick';
import styled from '@emotion/styled';
import Song from 'components/Song';

const Wrapper = styled('section')`
  padding: 310px 7% 60px 7%;
  width: 86%;
  overflow: hidden;
`;

const SongssWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  > div {
    width: 100%;
  }
`;

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1700, settings: { slidesToShow: 3 } },
    { breakpoint: 1300, settings: { slidesToShow: 2 } },
    { breakpoint: 890, settings: { slidesToShow: 1 } },
  ],
};

export const Songs = ({ t, songs, id }) => {
  return (
    <>
      <Wrapper id={id}>
        <SongssWrapper>
          <Slider {...settings}>{songs && songs.map(item => <Song t={t} key={item.id} song={item} />)}</Slider>
        </SongssWrapper>
      </Wrapper>
    </>
  );
};

Songs.propTypes = {
  t: PropTypes.func,
  id: PropTypes.string,
  songs: PropTypes.array,
};

export default withTranslation('common')(Songs);
