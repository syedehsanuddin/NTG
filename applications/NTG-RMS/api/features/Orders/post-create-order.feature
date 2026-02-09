@postCreateOrder

Feature: Create a new order
  Validate POST /api/v1/orders endpoint

  Scenario: POST Create a new order returns successful response
    When I send a POST request to endpoint "postCreateOrder" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
