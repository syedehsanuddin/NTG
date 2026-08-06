@getLowStockUniform

Feature: Get Low Stock Uniform
  Validate GET /api/v1/uniforms/low-stock endpoint

  Scenario: GET Get Low Stock Uniform returns successful response
    When I send a GET request to endpoint "getLowStockUniform"
    Then the response status should be 200
