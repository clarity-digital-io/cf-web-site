import { type NextPage } from "next";
import Head from "next/head";
import FAQ from "../components/Sections/FAQ";
import Features from "../components/Sections/Features";

import Hero from "../components/Sections/Hero";
import { TablePricing } from "../components/Sections/Pricing/secondary";
import Product from "../components/Sections/Product";
import Footer from "../components/UI/Footer";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Clarity Forms: Salesforce Mobile Offline Forms</title>
        <meta name="description" content="salesforce appexchange forms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <Product />
        <Features />
        <TablePricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Home;
