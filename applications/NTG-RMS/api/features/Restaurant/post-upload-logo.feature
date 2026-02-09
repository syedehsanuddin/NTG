@postUploadLogo

Feature: Upload restaurant logo to Supabase Storage
  Validate POST /api/v1/restaurant/info/upload-logo endpoint

  Scenario: POST Upload restaurant logo to Supabase Storage returns successful response
    When I send a POST request to endpoint "postUploadLogo" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
