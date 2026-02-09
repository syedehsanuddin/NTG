@getPlanLimits

Feature: Get plan limits for a specific plan
  Validate GET /api/v1/subscription/plan-limits/{planId} endpoint

  Scenario: GET Get plan limits for a specific plan returns successful response
    When I send a GET request to endpoint "getPlanLimits" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
