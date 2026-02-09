@putUpdateBranch

Feature: Update a branch
  Validate PUT /api/v1/restaurant/branches/{id} endpoint

  Scenario: PUT Update a branch returns successful response
    When I send a PUT request to endpoint "putUpdateBranch" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
