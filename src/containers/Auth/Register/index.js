/**
 * [Register]
 * This component shows the use of built-in CSS support
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTranslation } from 'utils/with-i18next';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';
import saga from '../saga';
import reducer from '../reducer';

import { compose } from 'redux';

import RegisterForm from '../../../components/RegisterForm';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Wrapper = styled('section')``;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Register = props => {
  const { t, handleContent } = props;
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
    console.log('handleFormSubmit Sate', state);
  };
  return (
    <Wrapper>
      <RegisterForm
        t={t}
        handleFormSubmit={handleFormSubmit}
        handleContent={handleContent}
        error={false}
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

Register.propTypes = {
  t: PropTypes.func,
  handleContent: PropTypes.func,
};

export default compose(memo)(withTranslation('common')(Register));
