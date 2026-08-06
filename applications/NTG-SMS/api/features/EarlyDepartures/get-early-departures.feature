@getEarlyDepartures

Feature: Get Early Departures
  Validate GET /api/v1/early-departures endpoint

  Scenario: GET Get Early Departures returns successful response
    When I send a GET request to endpoint "getEarlyDepartures"
    Then the response status should be 200
