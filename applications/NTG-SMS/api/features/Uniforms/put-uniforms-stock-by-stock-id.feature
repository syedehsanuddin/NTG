@putStockUniform

Feature: Put Stock Uniform
  Validate PUT /api/v1/uniforms/stock/{stockId} endpoint

  Scenario: PUT Put Stock Uniform returns successful response
    When I send a PUT request to endpoint "putStockUniform" with id "{STORED_STOCK_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
