@postRetranslate

Feature: Re-translate an entity using AI (Admin only)
  Validate POST /api/v1/translations/admin/retranslate endpoint

  Scenario: POST Re-translate an entity using AI (Admin only) returns successful response
    When I send a POST request to endpoint "postRetranslate" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
