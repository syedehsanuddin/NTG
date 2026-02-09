@postUploadBuffetImage

Feature: Upload buffet image to Supabase Storage
  Validate POST /api/v1/menu/buffets/{id}/upload-image endpoint

  Scenario: POST Upload buffet image to Supabase Storage returns successful response
    When I send a POST request to endpoint "postUploadBuffetImage" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
