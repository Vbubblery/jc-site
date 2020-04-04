// import App from 'next/app'
import '../tailwind.css';
import 'animate.css';
import Layout from '../components/Layout';
import Head from 'next/head';

import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const App = ({ Component, pageProps, apollo }: any) => {
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
})(App);
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
