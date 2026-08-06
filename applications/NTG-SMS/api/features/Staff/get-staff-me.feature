@getMeStaff

Feature: Get Me Staff
  Validate GET /api/v1/staff/me endpoint

  Scenario: GET Get Me Staff returns successful response
    When I send a GET request to endpoint "getMeStaff"
    Then the response status should be 200
