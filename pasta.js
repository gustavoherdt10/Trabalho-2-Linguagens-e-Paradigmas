const taxasCambio = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75,
    "JPY": 110.49
  };
  
  const calcularConversao = (valor, taxaOrigem, taxaDestino) => (valor / taxaOrigem) * taxaDestino;
  
  const validarEntrada = (entrada) => {
    const valorNumerico = parseFloat(entrada);
    return !isNaN(valorNumerico) && isFinite(valorNumerico) && valorNumerico > 0;
  };
  
  const exibirErro = (mensagem) => mensagem;

  const atualizarMensagemErro = (mensagem) => {
    document.getElementById('mensagemErro').innerText = mensagem;
  };

  const mensagemErro = exibirErro("Insira um valor numérico válido e positivo.");
  atualizarMensagemErro(mensagemErro);

  const obterValores = (valor, moedaOrigem, moedaDestino) => ({
    valor,
    moedaOrigem,
    moedaDestino
  });

  const converterMoeda = () => {
    const { valor, moedaOrigem, moedaDestino } = obterValores();

    if (!validarEntrada(valor)) {
      exibirErro("Insira um valor numérico válido e positivo.");
      return;
    }
  
    exibirErro("");

    const resultado = calcularConversao(parseFloat(valor), taxasCambio[moedaOrigem], taxasCambio[moedaDestino]);

    document.getElementById('resultado').innerText = `Valor convertido: ${resultado.toFixed(2)} ${moedaDestino}`;
  };

  const gerarOpcoesMoeda = () => {
    const opcoes = Object.keys(taxasCambio).map(
      (moeda) => `<option value="${moeda}">${moeda}</option>`
    );
    document.getElementById('moedaOrigem').innerHTML = opcoes.join('');
    document.getElementById('moedaDestino').innerHTML = opcoes.join('');
  };
  
  gerarOpcoesMoeda();

  document.getElementById('botaoConverter').addEventListener('click', converterMoeda);
  