@postCreateBranch

Feature: Create a new branch
  Validate POST /api/v1/restaurant/branches endpoint

  Scenario: POST Create a new branch returns successful response
    When I send a POST request to endpoint "postCreateBranch" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
