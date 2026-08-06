@getAcademicComparisonReport

Feature: Get Academic Comparison Report
  Validate GET /api/v1/reports/academic/comparison endpoint

  Scenario: GET Get Academic Comparison Report returns successful response
    When I send a GET request to endpoint "getAcademicComparisonReport"
    Then the response status should be 200
