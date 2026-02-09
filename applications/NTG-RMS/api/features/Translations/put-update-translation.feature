@putUpdateTranslation

Feature: Update a specific translation (manual edit)
  Validate PUT /api/v1/translations endpoint

  Scenario: PUT Update a specific translation (manual edit) returns successful response
    When I send a PUT request to endpoint "putUpdateTranslation" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
