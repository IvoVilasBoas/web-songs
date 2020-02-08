/*
 Material-ui Form 
 https://codesandbox.io/s/react-final-form-material-ui-example-3xi2d
*/

import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';
import Alert from '../Alert';
import Input from '../HtmlElements/Input';
import { Button, Grid, Paper, CssBaseline, Typography } from '@material-ui/core';

const initialState = {
  email: '',
  name: '',
  password: '',
};

const RegisterForm = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handleFormSubmit, t, handleContent, loading, error, errorValidation } = props;

  const handleInputs = e => {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    console.log('Loading', loading),
    (
      <form onSubmit={e => handleFormSubmit(e, state)} href="#!">
        <CssBaseline />
        <Typography variant="h5" align="center" component="h2" gutterBottom>
          {t('sigmUp')}
        </Typography>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <Input
                name="email"
                type="email"
                placeholder={t('modalRegistration.email')}
                value={state.email}
                icon="envelope"
                onChange={handleInputs}
                required
                error={errorValidation && errorValidation.email}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <Input
                name="name"
                type="text"
                placeholder={t('modalRegistration.name')}
                value={state.firstName}
                icon="user"
                onChange={handleInputs}
                required
                error={errorValidation && errorValidation.firstName}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <Input
                name="password"
                type="password"
                placeholder={t('modalRegistration.password')}
                value={state.password}
                icon="lock"
                onChange={handleInputs}
                required
                error={errorValidation && errorValidation.password}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" type="submit">
                {t('login')}
              </Button>
              or
              <Button onClick={handleContent('login')} onTouchEnd={handleContent('login')} color="primary"></Button>
            </Grid>
          </Grid>
        </Paper>
        {error && (
          <Alert variant="outlined" severity="error">
            {error && error.message}
          </Alert>
        )}
      </form>
    )
  );
};

RegisterForm.propTypes = {
  t: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleContent: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  errorValidation: PropTypes.any,
};

export default RegisterForm;
