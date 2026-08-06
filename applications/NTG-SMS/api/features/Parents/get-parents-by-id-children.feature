@getChildrenParentById

Feature: Get Children Parent By Id
  Validate GET /api/v1/parents/{id}/children endpoint

  Scenario: GET Get Children Parent By Id returns successful response
    When I send a GET request to endpoint "getChildrenParentById" with id "{STORED_CHILDREN_ID}"
    Then the response status should be 200
