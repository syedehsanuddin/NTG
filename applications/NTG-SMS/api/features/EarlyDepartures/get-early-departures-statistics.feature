@getStatisticEarlyDeparture

Feature: Get Statistic Early Departure
  Validate GET /api/v1/early-departures/statistics endpoint

  Scenario: GET Get Statistic Early Departure returns successful response
    When I send a GET request to endpoint "getStatisticEarlyDeparture"
    Then the response status should be 200
