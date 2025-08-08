// src/config/leagueConfig.js
const leagueConfig = {
  draft: {
    date: "Friday, August 22nd - 8:00 PM EST",
    location: "Mish’s House, LFG!!",
    address: "3568 Snowdon Drive, Westfield, IN 46074",
  },
  draftOrder: [
    { manager: "JD", paid: true },
    { manager: "Marcello", paid: true },
    { manager: "Matt", paid: true },
    { manager: "Scham-Balls", paid: false },
    { manager: "Mish", paid: true },
    { manager: "Debo", paid: true },
    { manager: "Mark", paid: false },
    { manager: "McCool", paid: true },
    { manager: "Fischer", paid: false },
    { manager: "DD", paid: true },
    { manager: "Shaw", paid: true },
    { manager: "Gus", paid: true },
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
