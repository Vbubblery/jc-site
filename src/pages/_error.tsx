import { withTranslation } from '../libs/i18n';
import Link from 'next/link';

const Error = ({ statusCode, t }: any) => {
  return (
    <>
      <div className="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
        <p className="font-sans text-white error-text">
          {statusCode
            ? statusCode === 404
              ? t('error:404')
              : t('error:errorWithStatusCode', { statusCode })
            : t('unknownError')}
        </p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span className="opacity-50">{t('common:goBack')} </span>

        <Link href="/">
          <a className="border-b">{t('common:home')}</a>
        </Link>
      </div>
      <style jsx>{`
        * {
          "Whitney SSm A", "Whitney SSm B", "Helvetica Neue", Helvetica, Arial, Sans-Serif;
        }
        .error-text {
            font-size: 20px;
        }
        @media (min-width: 768px) {
          .error-text {
            font-size: 50px;
          }
        }
        @media (min-width: 1024px) {
          .error-text {
            font-size: 50px;
          }
        }
      `}</style>
    </>
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, namespacesRequired: ['error', 'common'] };
};

export default withTranslation(['common', 'error'])(Error);
