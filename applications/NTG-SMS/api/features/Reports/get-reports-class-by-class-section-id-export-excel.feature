@getClasExportExcelReport

Feature: Get Clas Export Excel Report
  Validate GET /api/v1/reports/class/{classSectionId}/export/excel endpoint

  Scenario: GET Get Clas Export Excel Report returns successful response
    When I send a GET request to endpoint "getClasExportExcelReport" with id "{STORED_EXCEL_ID}"
    Then the response status should be 200
