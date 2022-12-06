import { type NextPage } from "next";
import Head from "next/head";
import AdditionalPricing from "../components/Sections/AdditionalPricing";
import FAQ from "../components/Sections/FAQ";
import Features from "../components/Sections/Features";

import Hero from "../components/Sections/Hero";
import Pricing from "../components/Sections/Pricing";
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
        <Features />
        <Pricing />
        <AdditionalPricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Home;
