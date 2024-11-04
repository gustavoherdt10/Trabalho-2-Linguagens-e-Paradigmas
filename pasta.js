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

const atualizarMensagemErro = (mensagem) => {
  document.getElementById('mensagemErro').innerText = mensagem;
};

const obterValores = () => ({
  valor: document.getElementById('valor').value,
  moedaOrigem: document.getElementById('moedaOrigem').value,
  moedaDestino: document.getElementById('moedaDestino').value,
});

const converterMoeda = () => {
  const { valor, moedaOrigem, moedaDestino } = obterValores();

  if (!validarEntrada(valor)) {
      atualizarMensagemErro("Insira um valor numérico válido e positivo.");
      return;
  }
  atualizarMensagemErro("");

  const resultado = calcularConversao(parseFloat(valor), taxasCambio[moedaOrigem], taxasCambio[moedaDestino]);
  document.getElementById('resultado').innerText = `Valor convertido: ${resultado.toFixed(2)} ${moedaDestino}`;
};

const gerarOpcoesMoeda = () => {
  const opcoes = Object.keys(taxasCambio)
      .map(moeda => `<option value="${moeda}">${moeda}</option>`)
      .join('');
  document.getElementById('moedaOrigem').innerHTML = opcoes;
  document.getElementById('moedaDestino').innerHTML = opcoes;
};

gerarOpcoesMoeda();
document.getElementById('botaoConverter').addEventListener('click', converterMoeda);
