@postCreateClasse

Feature: Post Create Classe
  Validate POST /api/v1/classes endpoint

  Scenario: POST Post Create Classe returns successful response
    When I send a POST request to endpoint "postCreateClasse" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
