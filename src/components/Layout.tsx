import dynamic from 'next/dynamic';
const LanguageSwitcher = dynamic(() => import('./language/Switcher'), {
  ssr: false,
});

export default (props: any) => (
  <>
    <LanguageSwitcher />
    {props.children}
  </>
);
