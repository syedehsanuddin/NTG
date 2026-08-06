@getClasses

Feature: Get Classes
  Validate GET /api/v1/classes endpoint

  Scenario: GET Get Classes returns successful response
    When I send a GET request to endpoint "getClasses"
    Then the response status should be 200
