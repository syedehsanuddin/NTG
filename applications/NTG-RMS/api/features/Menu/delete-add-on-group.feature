@deleteAddOnGroup

Feature: Delete add-on group (soft delete)
  Validate DELETE /api/v1/menu/add-on-groups/{id} endpoint

  Scenario: DELETE Delete add-on group (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteAddOnGroup" with id "test-id"
    Then the response status should be 200
