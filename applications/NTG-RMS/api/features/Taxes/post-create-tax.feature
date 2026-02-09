@postCreateTax

Feature: Create a new tax
  Validate POST /api/v1/taxes endpoint

  Scenario: POST Create a new tax returns successful response
    When I send a POST request to endpoint "postCreateTax" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
