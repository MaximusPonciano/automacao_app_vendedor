# language: pt
Funcionalidade: Fluxo da Home

  Cenário: Abaixando o modal da Home
    Dado que eu abro o aplicativo
    Quando o modal da Home sobe
    E eu clico fora do modal
    Então o modal deve descer
    E eu seleciono o produto na home

