import NextI18Next from 'next-i18next';

const languages = ['en', 'zh'];

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh'],
  localePath: 'public/static/locales',
});

NextI18NextInstance.i18n.languages = languages;
/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
  i18n,
} = NextI18NextInstance;
