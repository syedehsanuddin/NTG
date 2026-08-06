@getClasStatisticAssessment

Feature: Get Clas Statistic Assessment
  Validate GET /api/v1/assessments/class/{classSectionId}/statistics endpoint

  Scenario: GET Get Clas Statistic Assessment returns successful response
    When I send a GET request to endpoint "getClasStatisticAssessment" with id "{STORED_STATISTIC_ID}"
    Then the response status should be 200
