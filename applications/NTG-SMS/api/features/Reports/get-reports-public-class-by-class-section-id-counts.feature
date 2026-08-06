@getPublicClasCountReport

Feature: Get Public Clas Count Report
  Validate GET /api/v1/reports/public/class/{classSectionId}/counts endpoint

  Scenario: GET Get Public Clas Count Report returns successful response
    When I send a GET request to endpoint "getPublicClasCountReport" with id "{STORED_COUNT_ID}"
    Then the response status should be 200
