@deleteChildrenParent

Feature: Delete Children Parent
  Validate DELETE /api/v1/parents/{id}/children/{studentId} endpoint

  Scenario: DELETE Delete Children Parent returns successful response
    When I send a DELETE request to endpoint "deleteChildrenParent" with id "{STORED_CHILDREN_ID}"
    Then the response status should be 200
