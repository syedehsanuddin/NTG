@postCreateSubscription

Feature: Create subscription (trial)
  Validate POST /api/v1/subscription endpoint

  Scenario: POST Create subscription (trial) returns successful response
    When I send a POST request to endpoint "postCreateSubscription" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
