@postDeductStock

Feature: Deduct stock (Usage/Waste)
  Validate POST /api/v1/inventory/stock/deduct endpoint

  Scenario: POST Deduct stock (Usage/Waste) returns successful response
    When I send a POST request to endpoint "postDeductStock" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
