@getEvents

Feature: Get Events
  Validate GET /api/v1/events endpoint

  Scenario: GET Get Events returns successful response
    When I send a GET request to endpoint "getEvents"
    Then the response status should be 200
