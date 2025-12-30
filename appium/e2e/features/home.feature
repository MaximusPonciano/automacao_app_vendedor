Feature: Login no App Vendedor via VTEX

  Scenario: Usuário acessa o App Vendedor autenticado
    Given que o aplicativo App Vendedor está aberto
    When eu acesso o fluxo de login
    And o cookie VTEX válido está presente no browser
    Then devo retornar para o aplicativo
    And devo visualizar a home do App Vendedor
