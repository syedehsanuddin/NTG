@deleteBuffet

Feature: Delete buffet (soft delete)
  Validate DELETE /api/v1/menu/buffets/{id} endpoint

  Scenario: DELETE Delete buffet (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteBuffet" with id "test-id"
    Then the response status should be 200
