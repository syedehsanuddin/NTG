@postChildrenParent

Feature: Post Children Parent
  Validate POST /api/v1/parents/{id}/children endpoint

  Scenario: POST Post Children Parent returns successful response
    When I send a POST request to endpoint "postChildrenParent" with id "{STORED_CHILDREN_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
