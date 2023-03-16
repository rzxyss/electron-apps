import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Head>
        <title>Home - Forum13</title>
      </Head>
      <div className="h-full w-full">
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-20 font-bold text-2xl">    
          <h1>Selamat Datang Di</h1>
          <h1>Forum SMKN 13 Bandung</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
