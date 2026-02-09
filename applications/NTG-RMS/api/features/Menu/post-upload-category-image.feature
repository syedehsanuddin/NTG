@postUploadCategoryImage

Feature: Upload category image to Supabase Storage
  Validate POST /api/v1/menu/categories/{id}/upload-image endpoint

  Scenario: POST Upload category image to Supabase Storage returns successful response
    When I send a POST request to endpoint "postUploadCategoryImage" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
