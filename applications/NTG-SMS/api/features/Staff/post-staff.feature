@postCreateStaff

Feature: Post Create Staff
  Validate POST /api/v1/staff endpoint

  Scenario: POST Post Create Staff returns successful response
    When I send a POST request to endpoint "postCreateStaff" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
