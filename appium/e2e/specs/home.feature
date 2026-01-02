# language: pt
Funcionalidade: Home

  Cenário: Abaixando o modal da Home
    Dado que eu abro o aplicativo
    Quando o modal da Home sobe
    E eu clico fora do modal
    Então o modal deve descer

  Cenário: Selecionar um produto da vitrine
    Dado que eu abro o aplicativo
    E eu clico fora do modal
    Quando eu seleciono o primeiro produto da vitrine
    Então eu devo ver a tela de detalhes do produto