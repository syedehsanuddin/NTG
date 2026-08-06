@getClassSectionResult

Feature: Get Class Section Result
  Validate GET /api/v1/results/class-section/{classSectionId} endpoint

  Scenario: GET Get Class Section Result returns successful response
    When I send a GET request to endpoint "getClassSectionResult" with id "{STORED_CLASSSECTION_ID}"
    Then the response status should be 200
