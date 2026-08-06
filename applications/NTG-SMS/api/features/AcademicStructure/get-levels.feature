@getLevels

Feature: Get Levels
  Validate GET /api/v1/levels endpoint

  Scenario: GET Get Levels returns successful response
    When I send a GET request to endpoint "getLevels"
    Then the response status should be 200
