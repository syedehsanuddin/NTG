@postCreateEarlyDeparture

Feature: Post Create Early Departure
  Validate POST /api/v1/early-departures endpoint

  Scenario: POST Post Create Early Departure returns successful response
    When I send a POST request to endpoint "postCreateEarlyDeparture" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
