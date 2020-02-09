/**
 * [Register]
 * This component shows the use of built-in CSS support
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';

import { doRegister } from '../actions';
import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';
import saga from '../saga';
import reducer from '../reducer';
import { createStructuredSelector } from 'reselect';
import { selectAuthRegister } from '../selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

import RegisterForm from '../../../components/RegisterForm';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Wrapper = styled('section')``;

const Register = props => {
  const { t, handleContent, registerResults, doRegister } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = reason => {
    console.log(open);

    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useInjectSaga({ key: 'auth', saga });
  useInjectReducer({ key: 'auth', reducer });

  const handleFormSubmit = (e, state) => {
    e.preventDefault();
    doRegister(state);
  };

  useEffect(() => {
    console.log('USE EFFECT registerResults', registerResults);
    if (registerResults.registedSuccess) {
      setOpen(true);
    }
  }, [registerResults]);

  return (
    <Wrapper>
      <RegisterForm
        t={t}
        loading={registerResults.loading}
        handleFormSubmit={handleFormSubmit}
        handleContent={handleContent}
        error={registerResults.error}
        errorValidation={null}
        registedSuccess={registerResults.registedSuccess}
      />
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {t('register.success')}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

Register.propTypes = {
  t: PropTypes.func,
  handleContent: PropTypes.func,
  doRegister: PropTypes.func,
  registerResults: PropTypes.any,
  registedSuccess: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  registerResults: selectAuthRegister(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doRegister: state => dispatch(doRegister(state)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(withTranslation('common')(Register));
