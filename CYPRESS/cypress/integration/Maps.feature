Feature: Maps

  vamos testar o Maps

  Background:
    Given que eu acesse o mapa

  Scenario: buscar um ponto no mapa
    When eu digitar o local "NAVIT Soluções Digitais"
    And selecionar o local "NAVIT Soluções Digitais" na lista de buscar
    Then o local "NAVIT Soluções Digitais" deve ser indicado no mapa

  Scenario Outline: teste
    When eu digitar o local "<string>"
    And selecionar o local "<string>" na lista de buscar

    Examples:
      | string                  |
      | NAVIT Soluções Digitais |
      | Caruaru Shopping        |