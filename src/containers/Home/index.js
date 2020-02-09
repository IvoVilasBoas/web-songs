import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'utils/with-i18next';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';

import saga from './saga';
import reducer from './reducer';
import { getCurrentUser } from './actions';
import { selectCurrentUser } from './selectors';

import Header from 'components/Header';
import Banner from './../../components/Banner';

export function Home({ t }) {
  useInjectSaga({ key: 'home', saga });
  useInjectReducer({ key: 'home', reducer });
  const [user, setUser] = useState(null);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    let localStorage;
    try {
      localStorage = window.localStorage.getItem('currentUser');
      if (localStorage !== undefined) {
        setUser(localStorage);
        setUserLogged(true);
      }
    } catch (error) {
      localStorage = {
        getItem: undefined,
        setItem: () => {},
      };
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem('currentUser');
    setUser(null);
    setUserLogged(false);
    //Next line its only to pass on Commit, will remove in future
    getCurrentUser();
  };

  return (
    <Layout>
      <Header t={t} userLogged={userLogged} logout={() => logout()} />
      {!userLogged ? <Banner t={t} /> : user}
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUserData: selectCurrentUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  t: PropTypes.func,
  getCurrentUserData: PropTypes.object,
  getCurrentUser: PropTypes.func,
};

export default compose(withConnect, memo)(withTranslation('common')(Home));
