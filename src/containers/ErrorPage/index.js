import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'utils/with-i18next';

export const ErrorPageHtml = props => {
  const { t } = props;

  return (
    <section className="section">
      <style jsx>{`
        section {
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          height: 100%;
          width: 100%;
          position: absolute;
          background-color: #184496;
        }

        @media screen and (max-width: 743px) {
          section {
            background: url('404.jpg') no-repeat center center fixed;
          }
          .text-off {
            margin: 0;
            font-size: 20px;
          }
          .bigger-oops {
            font-size: 50px !important;
            text-align: center;
            margin: 0 !important;
          }
        }
        .bigger-oops {
          font-size: 150px;
          margin: 0;
        }

        .offline-text {
          position: absolute;
          color: white;
          top: 20%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
        }

        .text-off {
          text-align: center;
          margin: 0;
        }
        .justify-offline {
          margin-top: 10px;
        }
        .image {
          background-image: url(/static/images/404.jpg);
          width: 100%;
          background-position: center center;
          height: 100%;
          position: absolute;
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>
      <div className="image" />

      <div className="offline-text">
        <h1 className="bigger-oops">{t('error.title')}</h1>
        <div className="justify-offline">
          <h2 className="text-off">{t('error.sub-title')}</h2>
          <h2 className="text-off">{t('error.sub-title2')}</h2>
        </div>
      </div>
    </section>
  );
};

ErrorPageHtml.propTypes = {
  t: PropTypes.func,
  animateProp: PropTypes.bool,
};

export default withTranslation('error')(ErrorPageHtml);
