@putDowngradePlan

Feature: Downgrade subscription plan
  Validate PUT /api/v1/subscription/downgrade endpoint

  Scenario: PUT Downgrade subscription plan returns successful response
    When I send a PUT request to endpoint "putDowngradePlan" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
