@deleteIngredient @12345

Feature: Delete an ingredient (soft delete)
  Validate DELETE /api/v1/inventory/ingredients/{id} endpoint


  Scenario: POST Create a new ingredient returns successful response
    When I send a POST request to endpoint "postCreateIngredient" with payload '{"name":"{GENERATE_INGREDIENT_NAME}","category":"other","unitOfMeasurement":"kg","currentStock":1000000,"minimumThreshold":0,"costPerUnit":50,"isActive":true}' and headers "branchId={BRANCH_ID}"
    Then the response status should be 201
    And I store the response id as ingredient id

  Scenario: PUT Update an ingredient returns successful response
    When I send a PUT request to endpoint "putUpdateIngredient" with id "{STORED_INGREDIENT_ID}" and payload '{"name":"UPDATED - {STORED_INGREDIENT_NAME}","category":"other","unitOfMeasurement":"kg","currentStock":3,"minimumThreshold":0,"costPerUnit":50,"isActive":true}'
    Then the response status should be 200

  Scenario: DELETE Delete an ingredient (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteIngredient" with id "{STORED_INGREDIENT_ID}"
    Then the response status should be 200
