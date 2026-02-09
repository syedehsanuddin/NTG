@putUpdateCategory

Feature: Update category
  Validate PUT /api/v1/menu/categories/{id} endpoint

  Scenario: PUT Update category returns successful response
    When I send a PUT request to endpoint "putUpdateCategory" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
