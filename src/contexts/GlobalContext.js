import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [requests, setRequests] = React.useState(() => {
    const storagedRequests = localStorage.getItem('@DesafioFrontend:requests');

    if (storagedRequests) {
      return JSON.parse(storagedRequests);
    }

    return [];
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    await fetch("https://desafiotecnicosti3.azurewebsites.net/pedido")
      .then(response => response.json())
      .then(item => setRequests(item))

    setLoading(false);
  };

  React.useEffect(() => {
    localStorage.setItem('@DesafioFrontend:requests', JSON.stringify(requests));
  }, [requests]);

  //Formatar Máscara CPF
  function maskCpf(n) {
    return n.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
  };

  // Formatar Moeda
  function convertCurrency(x) {
    return x.toLocaleString('pt-br', {
      style: 'currency', currency: 'BRL'
    })
  };

  // Formatar DATA
  const option = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <GlobalContext.Provider
      value={{
        requests,
        setRequests,
        loading,
        handleSubmit,
        maskCpf,
        convertCurrency,
        option
      }}>
      {children}
    </GlobalContext.Provider>
  );
};