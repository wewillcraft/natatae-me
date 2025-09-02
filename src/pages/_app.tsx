import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import { ConvexClientProvider } from "~/components/ConvexClientProvider";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ConvexClientProvider>
      <div className={geist.className}>
        <Component {...pageProps} />
      </div>
    </ConvexClientProvider>
  );
};

export default MyApp;
