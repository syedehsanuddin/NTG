@postCreateRecipe 

Feature: Create or update recipe for a food item
  Validate POST /api/v1/inventory/recipes endpoint


    Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"{GENERATE_INGREDIENT_NAME}","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId={BRANCH_ID}"
    Then the response status should be 201
    And I store the response id as ingredient id

  Scenario: POST Create recipe for a food item returns successful response
    When I send a POST request to endpoint "postCreateRecipe" with payload '{"foodItemId":"5d289869-4fde-4a84-aedb-a53e600850cd","ingredients":[{"ingredientId":"{STORED_INGREDIENT_ID}","quantity":1,"unit":"kg"}]}' and headers "branchId={BRANCH_ID}"
    Then the response status should be 201
    # CR-AHSAN NEED TO MAKE FOOD ID DYNAMIC HERE ---- AHSAN
