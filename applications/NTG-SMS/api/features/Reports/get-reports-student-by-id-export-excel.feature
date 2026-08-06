@getStudentExportExcelReportById

Feature: Get Student Export Excel Report By Id
  Validate GET /api/v1/reports/student/{id}/export/excel endpoint

  Scenario: GET Get Student Export Excel Report By Id returns successful response
    When I send a GET request to endpoint "getStudentExportExcelReportById" with id "{STORED_EXCEL_ID}"
    Then the response status should be 200
