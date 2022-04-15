import '../assets/tailwind.css';
import 'animate.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { appWithTranslation } from '../libs/i18n';
import App from 'next/app';

import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

function MyApp({ Component, pageProps, apollo }: any) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <title>Juncheng ZHOU</title>
      </Head>
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}
MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'https://graphql.fauna.com/graphql',
    cache: new InMemoryCache().restore(initialState || {}),
    request: (operation) => {
      operation.setContext({
        headers: {
          authorization: 'Bearer fnADoiyf2aACC_LgXLACEZoDUEP3YuzYVrUcTS0r',
        },
      });
    },
  });
})(appWithTranslation(MyApp));
