@getSlaApproaching

Feature: Get SLA Approaching Tickets API Validation
  Validate GET /api/v1/tickets/approaching-sla endpoint

  Scenario: GET SLA Approaching Tickets returns successful response
    When I send a GET request to endpoint "getSlaApproaching"
    Then the response status should be 200
    And the response should have field "data"
    And the response should have field "message"
    And the response should be a valid JSON array

