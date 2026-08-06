@getAcademicExportReport

Feature: Get Academic Export Report
  Validate GET /api/v1/reports/academic/export endpoint

  Scenario: GET Get Academic Export Report returns successful response
    When I send a GET request to endpoint "getAcademicExportReport"
    Then the response status should be 200
