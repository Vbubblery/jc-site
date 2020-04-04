import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <div className="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
        <p className="font-sans text-white error-text">404</p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <span className="opacity-50">Take me back to: </span>

        <Link href="/">
          <a className="border-b">Home</a>
        </Link>
      </div>
      <style jsx>{`
        * {
          "Whitney SSm A", "Whitney SSm B", "Helvetica Neue", Helvetica, Arial, Sans-Serif;
        }
        .error-text {
            font-size: 130px;
        }
        @media (min-width: 768px) {
          .error-text {
            font-size: 220px;
          }
        }
      `}</style>
    </>
  );
};

export default Custom404;
