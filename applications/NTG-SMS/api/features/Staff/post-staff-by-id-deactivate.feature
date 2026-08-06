@postDeactivateStaff

Feature: Post Deactivate Staff
  Validate POST /api/v1/staff/{id}/deactivate endpoint

  Scenario: POST Post Deactivate Staff returns successful response
    When I send a POST request to endpoint "postDeactivateStaff" with id "{STORED_DEACTIVATE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
