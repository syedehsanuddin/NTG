@getDashboard

Feature: Get Dashboard
  Validate GET /api/v1/dashboard endpoint

  Scenario: GET Get Dashboard returns successful response
    When I send a GET request to endpoint "getDashboard"
    Then the response status should be 200
