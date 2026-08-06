@putIssueUniformRequest

Feature: Put Issue Uniform Request
  Validate PUT /api/v1/uniform-requests/{id}/issue endpoint

  Scenario: PUT Put Issue Uniform Request returns successful response
    When I send a PUT request to endpoint "putIssueUniformRequest" with id "{STORED_ISSUE_ID}" and payload '"string"'
    Then the response status should be 200
