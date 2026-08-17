// src/config/leagueConfig.js
const leagueConfig = {
  draft: {
    date: "Friday, August 28th - 7:00 PM EST",
    location: "Mish’s House, LFG!!",
    address: "3568 Snowdon Drive, Westfield, IN 46074",
  },
  draftOrder: [
    { manager: "Fischer", paid: true },
    { manager: "Scham-Balls", paid: false },
    { manager: "Mark", paid: true },
    { manager: "Marcello", paid: true },
    { manager: "Debo", paid: true },
    { manager: "JD", paid: true },
    { manager: "Mish", paid: false },
    { manager: "DD", paid: false },
    { manager: "McCool", paid: true },
    { manager: "Welsch", paid: false },
    { manager: "Gus", paid: false },
    { manager: "Shaw-Balls", paid: false },
  ],
  payments: {
    venmo: "https://venmo.com/Paul-Ley",
    paypal: "https://paypal.me/PaulLey633",
    googlePay: "YOUR_GOOGLEWALLET_LINK",
    zelle: "YOUR_ZELLE_LINK",
    appleCash: "YOUR_APPLE_CASH_LINK",
  },
};

export default leagueConfig;
