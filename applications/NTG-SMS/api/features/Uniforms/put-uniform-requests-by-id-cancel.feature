@putCancelUniformRequest

Feature: Put Cancel Uniform Request
  Validate PUT /api/v1/uniform-requests/{id}/cancel endpoint

  Scenario: PUT Put Cancel Uniform Request returns successful response
    When I send a PUT request to endpoint "putCancelUniformRequest" with id "{STORED_CANCEL_ID}" and payload '"string"'
    Then the response status should be 200
