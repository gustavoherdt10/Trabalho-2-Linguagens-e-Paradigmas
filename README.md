# TRABALHO 2 LINGUAGENS E PARADIGMAS - CONVERSOR DE MOEDAS

# REQUISITOS FUNCIONAIS DO TRABALHO
1. Entrada de Dados:
- O usuário deve poder inserir o valor que deseja converter.
- O usuário deve selecionar duas moedas (ex: dólar e euro) a partir de uma lista de opções.

2. Taxa de Câmbio:
- O programa deve ter uma função que recebe a taxa de câmbio e aplica ao valor de
entrada.
- As taxas podem ser predefinidas ou fornecidas pelo usuário.

3. Conversão de Moeda:
- O programa deve utilizar uma função pura para aplicar a taxa de câmbio e retornar o
valor convertido.
- O valor convertido deve ser calculado de forma precisa e exibido ao usuário.

4. Validação:
- O programa deve validar as entradas do usuário (ex: o valor deve ser numérico e
positivo).
- A função de validação deve ser implementada como uma função pura.

5. Funções Puras e Imutabilidade:
- Todas as funções implementadas devem ser puras, sem alterar diretamente variáveis
globais ou o estado externo.
- O valor original de entrada deve ser imutável, ou seja, uma nova versão do valor
convertido deve ser gerada sem modificar o valor inicial.

6. Funções de Ordem Superior:
- O programa deve incluir ao menos uma função de ordem superior, como `map` para
converter uma lista de valores ou `filter` para validar entradas.

7. Interface do Usuário (opcional):
- Se os alunos escolherem usar uma linguagem com suporte a interfaces gráficas ou web
(como HTML/CSS e JavaScript), a interface deve permitir que o usuário interaja com a
conversão de forma simples.

# FUNCIONAMENTO DO SISTEMA

O Conversor de Moedas é um sistema desenvolvido em HTML, CSS e JavaScript, que permite ao usuário realizar a conversão de valores entre diferentes moedas com base em taxas de câmbio predefinidas.

O sistema foi projetado utilizando princípios de programação funcional:

1. Funções Puras:
- As funções, como calcularConversao e validarEntrada, são puras, o que significa que para um dado conjunto de entradas, sempre retornam o mesmo resultado, sem alterar variáveis fora de seu escopo.

2. Imutabilidade: 
- A entrada do usuário é manipulada de forma imutável; o valor original não é alterado diretamente, e novos valores são calculados com base nas funções puras.

3. Funções de Ordem Superior:
- A função gerarOpcoesMoeda usa map para gerar dinamicamente as opções de moedas no seletor, demonstrando o uso de funções de ordem superior para manipulação de listas.

# COMO RODAR O PROGRAMA

1. Pré-requisitos:
- O programa é executado em um navegador web e não requer instalação de software adicional.

2. Execução:
- Abra o arquivo index.html em um navegador.
- No campo “Valor”, insira o valor numérico desejado para conversão.
- Selecione as moedas de origem e de destino usando os menus suspensos.
- Clique no botão “Converter” para ver o valor convertido na moeda escolhida.

# DESENVOLVEDORES
- Este trabalho foi desenvolvido por Gustavo Herdt.