@deleteAddOn

Feature: Delete add-on (soft delete)
  Validate DELETE /api/v1/menu/add-on-groups/{addOnGroupId}/add-ons/{id} endpoint

  Scenario: DELETE Delete add-on (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteAddOn" with id "test-id"
    Then the response status should be 200
