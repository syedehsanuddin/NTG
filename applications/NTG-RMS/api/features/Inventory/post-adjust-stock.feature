@postAdjustStock

Feature: Adjust stock (Physical count correction)
  Validate POST /api/v1/inventory/stock/adjust endpoint

    Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"Automatest Test Ingredient","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191"
    Then the response status should be 201
    And I store the response id as ingredient id


  Scenario: POST Adjust stock (Physical count correction) returns successful response
    When I send a POST request to endpoint "postAdjustStock" with payload '{"ingredientId":"{STORED_INGREDIENT_ID}","newQuantity":5000000,"branchId":"bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191","reason":"Automated Test ","transactionDate":"2026-01-28T10:38:41.244Z"}' and headers "language=en"
    Then the response status should be 201
