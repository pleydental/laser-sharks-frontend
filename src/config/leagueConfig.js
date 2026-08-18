// src/config/leagueConfig.js
const leagueConfig = {
  draft: {
    date: "Friday, August 28th - 7:00 PM EST",
    location: "Mish’s House, LFG!!",
    address: "3568 Snowdon Drive, Westfield, IN 46074",
  },
  draftOrder: [
    { manager: "Fischer", paid: true, paidVia: "venmo" },
    { manager: "Mark", paid: true, paidVia: "venmo" },
    { manager: "JD", paid: true, paidVia: "venmo" },
    { manager: "Scham-Balls", paid: false },
    { manager: "Debo", paid: true, paidVia: "paypal" },
    { manager: "McCool", paid: true, paidVia: "venmo" },
    { manager: "Welsch", paid: true, paidVia: "zelle" },
    { manager: "Gus", paid: false },
    { manager: "Shaw-Balls", paid: false },
    { manager: "DD", paid: false },
    { manager: "Mish", paid: true },
    { manager: "Marcello", paid: true, paidVia: "venmo" },
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
