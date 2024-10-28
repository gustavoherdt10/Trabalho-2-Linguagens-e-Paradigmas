// Tabela de taxas de câmbio (em relação ao USD)
const taxasCambio = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75,
    "JPY": 110.49
  };
  
  // Função pura para calcular a conversão de moeda
  const calcularConversao = (valor, taxaOrigem, taxaDestino) => (valor / taxaOrigem) * taxaDestino;
  
  // Função pura para validar a entrada do usuário
  const validarEntrada = (entrada) => {
    const valorNumerico = parseFloat(entrada);
    return !isNaN(valorNumerico) && isFinite(valorNumerico) && valorNumerico > 0;
  };
  
  // Função para exibir uma mensagem de erro na interface
  const exibirErro = (mensagem) => {
    document.getElementById('mensagemErro').innerText = mensagem;
  };
  
  // Função para obter valores de entrada e retorno de um objeto imutável
  const obterValores = () => {
    const valor = document.getElementById('valor').value;
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
    return { valor, moedaOrigem, moedaDestino };
  };
  
  // Função de conversão com validação e imutabilidade
  const converterMoeda = () => {
    const { valor, moedaOrigem, moedaDestino } = obterValores();
  
    // Validação da entrada
    if (!validarEntrada(valor)) {
      exibirErro("Insira um valor numérico válido e positivo.");
      return;
    }
  
    exibirErro("");
  
    // Calcula a conversão usando a função pura
    const resultado = calcularConversao(parseFloat(valor), taxasCambio[moedaOrigem], taxasCambio[moedaDestino]);
  
    // Exibe o resultado final na interface sem modificar o valor original
    document.getElementById('resultado').innerText = `Valor convertido: ${resultado.toFixed(2)} ${moedaDestino}`;
  };
  
  // Função de ordem superior para gerar opções no menu suspenso
  const gerarOpcoesMoeda = () => {
    // Mapeia as chaves do objeto `taxasCambio` em opções HTML
    const opcoes = Object.keys(taxasCambio).map(
      (moeda) => `<option value="${moeda}">${moeda}</option>`
    );
    document.getElementById('moedaOrigem').innerHTML = opcoes.join('');
    document.getElementById('moedaDestino').innerHTML = opcoes.join('');
  };
  
  // Gera opções ao carregar a página
  gerarOpcoesMoeda();
  
  // Evento para ativar a conversão ao clicar no botão
  document.getElementById('botaoConverter').addEventListener('click', converterMoeda);
  