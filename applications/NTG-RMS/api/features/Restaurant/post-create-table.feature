@postCreateTable

Feature: Create a new table
  Validate POST /api/v1/restaurant/tables endpoint

  Scenario: POST Create a new table returns successful response
    When I send a POST request to endpoint "postCreateTable" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
