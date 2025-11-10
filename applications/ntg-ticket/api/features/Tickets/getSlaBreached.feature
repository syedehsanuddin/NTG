@getSlaBreached @regression

Feature: Get SLA Breached Tickets API Validation
  Validate GET /api/v1/tickets/breached-sla endpoint

  Scenario: GET SLA Breached Tickets returns successful response
    When I send a GET request to endpoint "getSlaBreached"
    Then the response status should be 200
    And the response should have field "data"
    And the response should have field "message"
    And the response should be a valid JSON array

