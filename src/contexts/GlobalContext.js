import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [requests, setRequests] = React.useState([]);
  const [loading, setLoading] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    await fetch("https://desafiotecnicosti3.azurewebsites.net/pedido")
      .then(response => response.json())
      .then(item => setRequests(item))

    setLoading(false);
  };

  function maskCpf(n) {
    return n.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
  };

  function convertCurrency(x) {
    return x.toFixed(2).replace('.', ',');
  };

  return (
    <GlobalContext.Provider
      value={{
        requests,
        loading,
        handleSubmit,
        maskCpf,
        convertCurrency
      }}>
      {children}
    </GlobalContext.Provider>
  );
};