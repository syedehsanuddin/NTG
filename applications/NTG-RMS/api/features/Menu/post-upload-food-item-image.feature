@postUploadFoodItemImage

Feature: Upload food item image to Supabase Storage
  Validate POST /api/v1/menu/food-items/{id}/upload-image endpoint

  Scenario: POST Upload food item image to Supabase Storage returns successful response
    When I send a POST request to endpoint "postUploadFoodItemImage" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
