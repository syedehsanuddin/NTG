@putUpdateBranche

Feature: Put Update Branche
  Validate PUT /api/v1/branches/{id} endpoint

  Scenario: POST Create a new branche returns successful response
    When I send a POST request to endpoint "postCreateBranche" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as branche id

  Scenario: PUT Put Update Branche returns successful response
    When I send a PUT request to endpoint "putUpdateBranche" with id "{STORED_BRANCHE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
