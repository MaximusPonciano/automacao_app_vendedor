Feature: Login VTEX por cookie no App Vendedor

  Como vendedor
  Quero autenticar via cookie VTEX
  Para acessar o app sem informar credenciais

  Background:
    Given que o aplicativo App Vendedor está aberto

  Scenario: Login automático via cookie válido
    When eu acesso o fluxo de login
    And o cookie VTEX válido está presente no browser
    Then devo retornar para o aplicativo
    And devo visualizar a home do App Vendedor