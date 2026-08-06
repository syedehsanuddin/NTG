@patchUpdateLevel

Feature: Patch Update Level
  Validate PATCH /api/v1/levels/{id} endpoint

  Scenario: POST Create a new level returns successful response
    When I send a POST request to endpoint "postCreateLevel" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as level id

  Scenario: PATCH Patch Update Level returns successful response
    When I send a PATCH request to endpoint "patchUpdateLevel" with id "{STORED_LEVEL_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
