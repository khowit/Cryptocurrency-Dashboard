import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

export default function CryptoContext({ children }) {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if(currency === "USD") setSymbol("$");
    else if(currency === "THB") setSymbol("฿");
  },[currency]);

  return (
    <Crypto.Provider value={{currency, symbol, setCurrency}}>
        {children}
    </Crypto.Provider>
  )
}

export const CryptoState = () => {
    return useContext(Crypto);
};


