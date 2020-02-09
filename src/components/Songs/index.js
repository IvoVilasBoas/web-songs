import React from 'react';
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

const SongsWrapper = styled('div')`
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

const Songs = props => {
  const { t, songs } = props;
  return (
    <>
      <Wrapper id="songs">
        <SongsWrapper>
          <Slider {...settings}>{songs && songs.map(item => <Song t={t} key={item.id} song={item} />)}</Slider>
        </SongsWrapper>
      </Wrapper>
    </>
  );
};

Songs.propTypes = {
  t: PropTypes.func,
  songs: PropTypes.array,
};

export default withTranslation('common')(Songs);
