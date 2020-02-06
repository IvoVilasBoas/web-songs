import React from 'react';
import PropTypes from 'prop-types';

import ErrorPageHtml from '../containers/ErrorPage/index';
import { withTranslation } from 'utils/with-i18next';

class ErrorPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <ErrorPageHtml t={t} />;
  }
}

ErrorPage.propTypes = {
  t: PropTypes.func,
};

ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features', 'error', 'footer'],
});

export default withTranslation('common')(ErrorPage);
