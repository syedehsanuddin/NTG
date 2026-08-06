@postCreateLeaveRequest

Feature: Post Create Leave Request
  Validate POST /api/v1/leave-requests endpoint

  Scenario: POST Post Create Leave Request returns successful response
    When I send a POST request to endpoint "postCreateLeaveRequest" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
