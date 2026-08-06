@postAuthorizeEarlyDeparture

Feature: Post Authorize Early Departure
  Validate POST /api/v1/early-departures/authorize endpoint

  Scenario: POST Post Authorize Early Departure returns successful response
    When I send a POST request to endpoint "postAuthorizeEarlyDeparture" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
