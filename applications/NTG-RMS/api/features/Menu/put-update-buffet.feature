@putUpdateBuffet

Feature: Update buffet
  Validate PUT /api/v1/menu/buffets/{id} endpoint

  Scenario: PUT Update buffet returns successful response
    When I send a PUT request to endpoint "putUpdateBuffet" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
