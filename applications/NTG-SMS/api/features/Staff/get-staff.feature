@getStaff

Feature: Get Staff
  Validate GET /api/v1/staff endpoint

  Scenario: GET Get Staff returns successful response
    When I send a GET request to endpoint "getStaff"
    Then the response status should be 200
