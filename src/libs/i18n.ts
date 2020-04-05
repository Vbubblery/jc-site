import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh'],
  localePath: 'public/static/locales',
});

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  i18n,
} = NextI18NextInstance;
