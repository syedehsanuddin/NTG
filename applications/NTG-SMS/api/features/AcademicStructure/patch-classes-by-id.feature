@patchUpdateClasse

Feature: Patch Update Classe
  Validate PATCH /api/v1/classes/{id} endpoint

  Scenario: POST Create a new classe returns successful response
    When I send a POST request to endpoint "postCreateClasse" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as classe id

  Scenario: PATCH Patch Update Classe returns successful response
    When I send a PATCH request to endpoint "patchUpdateClasse" with id "{STORED_CLASSE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
