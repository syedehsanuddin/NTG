@putRejectUniformRequest

Feature: Put Reject Uniform Request
  Validate PUT /api/v1/uniform-requests/{id}/reject endpoint

  Scenario: PUT Put Reject Uniform Request returns successful response
    When I send a PUT request to endpoint "putRejectUniformRequest" with id "{STORED_REJECT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
