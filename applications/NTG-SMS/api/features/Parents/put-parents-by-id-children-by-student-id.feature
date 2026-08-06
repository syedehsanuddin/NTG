@putChildrenParent

Feature: Put Children Parent
  Validate PUT /api/v1/parents/{id}/children/{studentId} endpoint

  Scenario: PUT Put Children Parent returns successful response
    When I send a PUT request to endpoint "putChildrenParent" with id "{STORED_CHILDREN_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
