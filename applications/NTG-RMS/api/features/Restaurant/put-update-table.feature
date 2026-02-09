@putUpdateTable

Feature: Update a table
  Validate PUT /api/v1/restaurant/tables/{id} endpoint

  Scenario: PUT Update a table returns successful response
    When I send a PUT request to endpoint "putUpdateTable" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
