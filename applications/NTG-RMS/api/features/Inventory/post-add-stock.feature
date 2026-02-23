@postAddStock @happyFlow 

Feature: Add stock (Purchase Entry)
  Validate POST /api/v1/inventory/stock/add endpoint


  Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"{GENERATE_INGREDIENT_NAME}","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId={BRANCH_ID}"
    Then the response status should be 201
    And I store the response id as ingredient id



  Scenario: POST Add stock (Purchase Entry) returns successful response
    When I send a POST request to endpoint "postAddStock" with payload '{"ingredientId":"{STORED_INGREDIENT_ID}","quantity":1,"unitCost":1,"branchId":"{BRANCH_ID}","supplierName":"Automatest Test Ingredient ","invoiceNumber":"Automatest Test Ingredient ","reason":"Automatest Test Ingredient ","transactionDate":"2026-01-01T10:13:47.470Z"}' and headers "language=en"
    Then the response status should be 201
    # And the response should have field "data"
