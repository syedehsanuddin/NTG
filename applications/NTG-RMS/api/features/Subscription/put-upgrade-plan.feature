@putUpgradePlan

Feature: Upgrade subscription plan
  Validate PUT /api/v1/subscription/upgrade endpoint

  Scenario: PUT Upgrade subscription plan returns successful response
    When I send a PUT request to endpoint "putUpgradePlan" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
