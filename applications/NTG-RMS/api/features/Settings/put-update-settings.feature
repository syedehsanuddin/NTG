@putUpdateSettings

Feature: Update settings
  Validate PUT /api/v1/settings endpoint

  Scenario: PUT Update settings returns successful response
    When I send a PUT request to endpoint "putUpdateSettings" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
