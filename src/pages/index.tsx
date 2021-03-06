import dynamic from 'next/dynamic';
const ProfileCard = dynamic(() => import('../components/home/ProfileCard'), {
  ssr: false,
});
const Home = () => {
  return (
    <>
      <div
        className="font-sans w-screen h-screen antialiased text-gray-900 leading-normal tracking-wider bg-cover"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/collection/9827291/1600x900')",
        }}
      >
        <ProfileCard />
      </div>
    </>
  );
};
Home.getInitialProps = () => ({
  namespacesRequired: ['profile'],
});

export default Home;
