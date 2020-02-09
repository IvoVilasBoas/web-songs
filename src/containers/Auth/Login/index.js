/**
 * [Register]
 * This component shows the use of built-in CSS support
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import jwt from 'jsonwebtoken';

import { doLogin } from '../actions';
import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';
import saga from '../saga';
import reducer from '../reducer';
import { createStructuredSelector } from 'reselect';
import { selectAuthLogin } from '../selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';

import LoginForm from '../../../components/LoginForm';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Wrapper = styled('section')``;

const Login = props => {
  const { t, handleContent, loginResults, doLogin } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = reason => {
    console.log(reason);

    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useInjectSaga({ key: 'auth', saga });
  useInjectReducer({ key: 'auth', reducer });

  const handleFormSubmit = (e, state) => {
    e.preventDefault();
    doLogin(state);
  };

  useEffect(() => {
    if (loginResults.loginResults.loginSuccess) {
      setOpen(true);
    }
  }, [loginResults.loginResults]);

  useEffect(() => {
    //setCookie('token', loginResults.token);
    //router.push('/home');
    const decodedToken = jwt.decode(loginResults.loginResults.token);

    console.log('DECODED TOKEN', decodedToken);
    let localStorage;
    console.log('LoginToken', loginResults);
    if (loginResults.loginResults) {
      try {
        localStorage = window.localStorage;
        localStorage.setItem('currentUser', loginResults.loginResults.token);
      } catch (error) {
        localStorage = {
          getItem: undefined,
          setItem: () => {},
        };
      }
    }
  }, [loginResults.loginResults.token]);

  return (
    <Wrapper>
      <LoginForm
        t={t}
        loading={loginResults.loginResults.loading}
        handleFormSubmit={handleFormSubmit}
        handleContent={handleContent}
        error={loginResults.loginResults.error}
        errorValidation={null}
      />

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {t('register.success')}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

Login.propTypes = {
  t: PropTypes.func,
  handleContent: PropTypes.func,
  doLogin: PropTypes.func,
  loginResults: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  loginResults: selectAuthLogin(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doLogin: state => dispatch(doLogin(state)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(withTranslation('common')(Login));
