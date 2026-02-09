@postCreateRecipe

Feature: Create or update recipe for a food item
  Validate POST /api/v1/inventory/recipes endpoint


    Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"Automatest Test Ingredient","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191"
    Then the response status should be 201
    And I store the response id as ingredient id

  Scenario: POST Create or update recipe for a food item returns successful response
    When I send a POST request to endpoint "postCreateRecipe" with payload '{"foodItemId":"5c61a269-be94-465c-a3a4-6ae54df068df","ingredients":[{"ingredientId":"{STORED_INGREDIENT_ID}","quantity":1,"unit":"kg"}]}' and headers "branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191"
    Then the response status should be 201
    # And the response should have field "data"
