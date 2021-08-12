Feature: Clients
Scenario: "List of clients"
  Given I´m have "10" clients in my database
  When I access thed home page
  Then see the list of {"10"} itens