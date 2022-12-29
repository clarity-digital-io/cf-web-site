import { type AppType } from "next/app";
import PlausibleProvider from 'next-plausible';
import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <PlausibleProvider domain="clarityforms.io">
    <Component {...pageProps} />
  </PlausibleProvider>;
};

export default trpc.withTRPC(MyApp);
