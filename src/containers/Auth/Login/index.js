/**
 * [Register]
 * This component shows the use of built-in CSS support
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import saga from '../saga';
import reducer from '../reducer';
import { doLogin } from '../actions';
import { selectAuthLogin } from '../selectors';

import LoginForm from '../../../components/LoginForm';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Wrapper = styled('section')``;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = props => {
  const { t, handleContent, loginResults, doLogin } = props;
  const [open, setOpen] = React.useState(false);
  const [setCookie] = useCookies(['token']);
  const router = useRouter();

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
    console.log('handleFormSubmit Sate', state);
    doLogin(state);
  };

  useEffect(() => {
    setCookie('token', loginResults.token);
    router.push('/home');
  }, [loginResults.token]);

  return (
    <Wrapper>
      <LoginForm
        t={t}
        loading={loginResults.loading}
        handleFormSubmit={handleFormSubmit}
        handleContent={handleContent}
        error={loginResults.error}
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
