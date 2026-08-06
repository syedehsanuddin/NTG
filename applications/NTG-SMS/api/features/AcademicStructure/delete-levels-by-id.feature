@deleteLevel

Feature: Delete Level
  Validate DELETE /api/v1/levels/{id} endpoint

  Scenario: POST Create a new level returns successful response
    When I send a POST request to endpoint "postCreateLevel" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as level id

  Scenario: DELETE Delete Level returns successful response
    When I send a DELETE request to endpoint "deleteLevel" with id "{STORED_LEVEL_ID}"
    Then the response status should be 200
