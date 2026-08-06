@getAssignmentStaffById

Feature: Get Assignment Staff By Id
  Validate GET /api/v1/staff/{id}/assignments endpoint

  Scenario: GET Get Assignment Staff By Id returns successful response
    When I send a GET request to endpoint "getAssignmentStaffById" with id "{STORED_ASSIGNMENT_ID}"
    Then the response status should be 200
