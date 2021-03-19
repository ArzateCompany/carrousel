import Head from "next/head";

import Carousel from "../components/carousel";
import Card from "../components/card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-300 h-screen">
        <Carousel>
          <Card titleCard="slide one" bgColor="bg-blue-600" />
          <Card titleCard="slide two" bgColor="bg-yellow-600" />
          <Card titleCard="slide three" bgColor="bg-pink-600" />
          <Card titleCard="slide four" bgColor="bg-green-600" />
          <Card titleCard="slide five" bgColor="bg-red-600" />
          <Card titleCard="slide six" bgColor="bg-yellow-400" />
          <Card titleCard="slide seven" bgColor="bg-blue-600" />
        </Carousel>
      </main>
    </>
  );
}
