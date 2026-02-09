@postCreateIngredient

Feature: Create a new ingredient
  Validate POST /api/v1/inventory/ingredients endpoint

  Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"Automatest Test Ingredient","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191"
    Then the response status should be 201
