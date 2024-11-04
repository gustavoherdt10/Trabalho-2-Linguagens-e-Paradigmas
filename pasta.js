const taxasCambio = {
  "USD": 1,
  "EUR": 0.85,
};

const calcularConversao = (valor, taxaOrigem, taxaDestino) => 
  (valor / taxaOrigem) * taxaDestino;

const validarEntrada = (entrada) => {
  const valorNumerico = parseFloat(entrada);
  return !isNaN(valorNumerico) && isFinite(valorNumerico) && valorNumerico > 0;
};

const gerarOpcoesMoeda = (taxas) => {
  return Object.keys(taxas).map(moeda => `<option value="${moeda}">${moeda}</option>`).join('');
};

const executarConversao = (valor, moedaOrigem, moedaDestino, taxas) => {
  if (!validarEntrada(valor)) {
    return {
      mensagemErro: "Insira um valor numérico válido e positivo.",
      resultado: null
    };
  }
  const resultado = calcularConversao(parseFloat(valor), taxas[moedaOrigem], taxas[moedaDestino]);
  return {
    mensagemErro: "",
    resultado: `Valor convertido: ${resultado.toFixed(2)} ${moedaDestino}`
  };
};

const renderizarInterface = ({ mensagemErro, resultado, opcoesMoeda }) => {
  document.getElementById('mensagemErro').innerText = mensagemErro;
  if (resultado) document.getElementById('resultado').innerText = resultado;
  if (opcoesMoeda) {
    document.getElementById('moedaOrigem').innerHTML = opcoesMoeda;
    document.getElementById('moedaDestino').innerHTML = opcoesMoeda;
  }
};

const inicializarInterface = () => {
  const opcoesMoeda = gerarOpcoesMoeda(taxasCambio);
  renderizarInterface({ opcoesMoeda });

  document.getElementById('botaoConverter').addEventListener('click', () => {
    const valor = document.getElementById('valor').value;
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;

    const { mensagemErro, resultado } = executarConversao(valor, moedaOrigem, moedaDestino, taxasCambio);
    renderizarInterface({ mensagemErro, resultado });
  });
};

inicializarInterface();
