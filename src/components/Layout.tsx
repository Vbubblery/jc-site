import dynamic from 'next/dynamic';
const LanguageSwitcher = dynamic(() => import('./language/Switcher'), {
  ssr: false,
});

const Layout = (props: any) => (
  <>
    <LanguageSwitcher />
    {props.children}
  </>
);

export default Layout;
