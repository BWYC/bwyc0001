import "./style.css";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import { CoreBlockchain } from "@thirdweb-dev/chains";

import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <ThirdwebProvider activeChain={CoreBlockchain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
