@getLeaveRequestById

Feature: Get Leave Request By Id
  Validate GET /api/v1/leave-requests/{id} endpoint

  Scenario: POST Create a new leaverequest returns successful response
    When I send a POST request to endpoint "postCreateLeaveRequest" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as leaverequest id

  Scenario: GET Get Leave Request By Id returns successful response
    When I send a GET request to endpoint "getLeaveRequestById" with id "{STORED_LEAVEREQUEST_ID}"
    Then the response status should be 200
