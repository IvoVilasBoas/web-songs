import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';

import saga from './saga';
import reducer from './reducer';
import { getShowcases } from './actions';
import { selectShowcases } from './selectors';
import Banner from './../../components/Banner';

export function Home({ t, getShowcases, showcasesData }) {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  useEffect(() => {
    getShowcases();
  }, [showcasesData]);
  return (
    <Layout>
      <Banner t={t} />
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  showcasesData: selectShowcases(),
});

export function mapDispatchToProps(dispatch) {
  return { getShowcases: () => dispatch(getShowcases()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  t: PropTypes.func,
  showcasesData: PropTypes.object,
  getShowcases: PropTypes.func,
};

export default compose(withConnect, memo)(Home);
