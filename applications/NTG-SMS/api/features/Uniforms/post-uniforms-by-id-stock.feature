@postStockUniform

Feature: Post Stock Uniform
  Validate POST /api/v1/uniforms/{id}/stock endpoint

  Scenario: POST Post Stock Uniform returns successful response
    When I send a POST request to endpoint "postStockUniform" with id "{STORED_STOCK_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
