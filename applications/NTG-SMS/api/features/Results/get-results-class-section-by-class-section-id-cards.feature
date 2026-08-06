@getClassSectionCardResult

Feature: Get Class Section Card Result
  Validate GET /api/v1/results/class-section/{classSectionId}/cards endpoint

  Scenario: GET Get Class Section Card Result returns successful response
    When I send a GET request to endpoint "getClassSectionCardResult" with id "{STORED_CARD_ID}"
    Then the response status should be 200
