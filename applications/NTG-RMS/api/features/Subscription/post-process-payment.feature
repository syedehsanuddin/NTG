@postProcessPayment

Feature: Process payment (dummy payment system)
  Validate POST /api/v1/subscription/payment endpoint

  Scenario: POST Process payment (dummy payment system) returns successful response
    When I send a POST request to endpoint "postProcessPayment" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
