@putApproveUniformRequest

Feature: Put Approve Uniform Request
  Validate PUT /api/v1/uniform-requests/{id}/approve endpoint

  Scenario: PUT Put Approve Uniform Request returns successful response
    When I send a PUT request to endpoint "putApproveUniformRequest" with id "{STORED_APPROVE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
