@postTransferStock

Feature: Transfer stock between branches
  Validate POST /api/v1/inventory/stock/transfer endpoint

  Scenario: POST Transfer stock between branches returns successful response
    When I send a POST request to endpoint "postTransferStock" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
