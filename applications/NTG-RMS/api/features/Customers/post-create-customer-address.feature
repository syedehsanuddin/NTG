@postCreateCustomerAddress

Feature: Create a customer address
  Validate POST /api/v1/customers/{id}/addresses endpoint

  Scenario: POST Create a customer address returns successful response
    When I send a POST request to endpoint "postCreateCustomerAddress" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
