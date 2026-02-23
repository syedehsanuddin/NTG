@postAdjustStock 

Feature: Adjust stock (Physical count correction)
  Validate POST /api/v1/inventory/stock/adjust endpoint

    Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"{GENERATE_INGREDIENT_NAME}","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId={BRANCH_ID}"
    Then the response status should be 201
    And I store the response id as ingredient id


  Scenario: POST Adjust stock (Physical count correction) returns successful response
    When I send a POST request to endpoint "postAdjustStock" with payload '{"ingredientId":"{STORED_INGREDIENT_ID}","newQuantity":5000000,"branchId":"{BRANCH_ID}","reason":"Automated Test ","transactionDate":"2026-01-28T10:38:41.244Z"}' and headers "language=en"
    Then the response status should be 201
