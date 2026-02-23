@postDeductStock 

Feature: Deduct stock (Usage/Waste)
  Validate POST /api/v1/inventory/stock/deduct endpoint


  Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"{GENERATE_INGREDIENT_NAME}","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId={BRANCH_ID}"
    Then the response status should be 201
    And I store the response id as ingredient id

    
  Scenario: POST Deduct stock (Usage/Waste) returns successful response
    When I send a POST request to endpoint "postDeductStock" with payload '{"ingredientId":"{STORED_INGREDIENT_ID}","quantity":1,"branchId":"{BRANCH_ID}","reason":"usage","referenceId":"","transactionDate":"2026-02-22T11:56:49.426Z"}'
    Then the response status should be 201
    # And the response should have field "data"
