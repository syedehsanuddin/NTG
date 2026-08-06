@deleteClasse

Feature: Delete Classe
  Validate DELETE /api/v1/classes/{id} endpoint

  Scenario: POST Create a new classe returns successful response
    When I send a POST request to endpoint "postCreateClasse" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as classe id

  Scenario: DELETE Delete Classe returns successful response
    When I send a DELETE request to endpoint "deleteClasse" with id "{STORED_CLASSE_ID}"
    Then the response status should be 200
