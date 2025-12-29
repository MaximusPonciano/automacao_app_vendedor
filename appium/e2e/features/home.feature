Feature: Home

  Scenario: Fechar modal da home
    Given que eu abro o aplicativo
    When o modal da Home sobe
    When eu clico fora do modal
    Then o modal deve descer
