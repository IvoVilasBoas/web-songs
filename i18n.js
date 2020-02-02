const NextI18Next = require('next-i18next').default;
const config = require('next/config').default();
const get = require('lodash/get');

const localeSubpaths = get(config, 'publicRuntimeConfig.localeSubpaths', 'none');

const EN = 'en';
const PT = 'pt';

const localeSubpathMapping = {
  none: {},
  en: EN,
  pt: PT,
  all: {
    en: EN,
    pt: PT,
  },
};

module.exports = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: 'en',
  otherLanguages: [EN, PT],
  localeSubpaths: localeSubpathMapping[localeSubpaths],
});
