@getBrancheById

Feature: Get Branche By Id
  Validate GET /api/v1/branches/{id} endpoint

  Scenario: POST Create a new branche returns successful response
    When I send a POST request to endpoint "postCreateBranche" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as branche id

  Scenario: GET Get Branche By Id returns successful response
    When I send a GET request to endpoint "getBrancheById" with id "{STORED_BRANCHE_ID}"
    Then the response status should be 200
