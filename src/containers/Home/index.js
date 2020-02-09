import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'utils/with-i18next';

import { getSongs } from './actions';
import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';
import saga from './saga';
import reducer from './reducer';
import { createStructuredSelector } from 'reselect';
import { selectSongs } from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Banner from './../../components/Banner';
import Songs from 'components/Songs';

const Home = props => {
  const { t, getSongs, songsResults } = props;

  useInjectSaga({ key: 'home', saga });
  useInjectReducer({ key: 'home', reducer });

  const [user, setUser] = useState(null);
  const [userLogged, setUserLogged] = useState(false);
  const [songs, setSongs] = useState();

  useEffect(() => {
    let localStorage;
    try {
      console.log('user', user);
      localStorage = window.localStorage.getItem('currentUser');
      if (localStorage !== null) {
        setUser(localStorage);
        setUserLogged(true);
        getSongs();
      }
    } catch (error) {
      localStorage = {
        getItem: undefined,
        setItem: () => {},
      };
    }
  }, []);

  useEffect(() => {
    console.log('songsData', songsResults.songsResults);
    try {
      setSongs(songsResults.songsResults);
      console.log('Songs', songs);
    } catch (error) {
      console.log('Use Effect SongResults Catch', error);
    }
  }, [songsResults]);

  const logout = () => {
    window.localStorage.removeItem('currentUser');
    setUser(null);
    setUserLogged(false);
  };

  return (
    <Layout>
      <Header t={t} userLogged={userLogged} logout={() => logout()} />
      {!userLogged ? <Banner t={t} /> : songs && songs.length > 3 && <Songs t={t} songs={songs}></Songs>}
    </Layout>
  );
};

Home.propTypes = {
  t: PropTypes.func,
  getSongs: PropTypes.func,
  songsResults: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  songsResults: selectSongs(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getSongs: result => dispatch(getSongs(result)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(withTranslation('common')(Home));
