# @getCustomersExplicit @happyFlow

Feature: Get all customers
  Validate GET /api/v1/customers endpoint

  Scenario: GET Get all customers returns successful response
    When I send a GET request to endpoint "getCustomers"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
