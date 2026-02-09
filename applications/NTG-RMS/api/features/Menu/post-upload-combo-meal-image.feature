@postUploadComboMealImage

Feature: Upload combo meal image to Supabase Storage
  Validate POST /api/v1/menu/combo-meals/{id}/upload-image endpoint

  Scenario: POST Upload combo meal image to Supabase Storage returns successful response
    When I send a POST request to endpoint "postUploadComboMealImage" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
