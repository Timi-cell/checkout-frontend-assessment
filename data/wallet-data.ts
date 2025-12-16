import { Token, WalletOption } from "@/types/wallet";

const walletImages = {
  metamask: "/images/metamask.png",
  rainbow: "/images/rainbow.png",
  walletconnect: "/images/walletconnect.png",
  others: "/images/walletblack.png",
};

const tokenImages = {
  celo: "/images/celo.png",
  ton: "/images/ton.png",
  bnb: "/images/bnb.png",
};

export const walletTypes: WalletOption[] = [
  {
    id: "metamask",
    name: "Metamask",
    image: walletImages.metamask,
  },
  {
    id: "rainbow",
    name: "Rainbow",
    image: walletImages.rainbow,
  },
  {
    id: "wallet-connect",
    name: "WalletConnect",
    image: walletImages.walletconnect,
  },
  {
    id: "others",
    name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    image: walletImages.others,
  },
];

export const checkoutTabs = [
  { label: "Crypto to cash", value: "crypto-cash" },
  { label: "Cash to crypto", value: "cash-crypto" },
  { label: "Crypto to fiat loan", value: "crypto-loan" },
];

export const tokens: Token[] = [
  { symbol: "ETH", name: "USDT - CELO", image: tokenImages.celo },
  { symbol: "USDT", name: "USDT - TON", image: tokenImages.ton },
  { symbol: "BTC", name: "USDT - BNB", image: tokenImages.bnb },
];