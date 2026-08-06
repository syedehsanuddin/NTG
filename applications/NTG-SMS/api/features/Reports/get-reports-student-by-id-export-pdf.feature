@getStudentExportPdfReportById

Feature: Get Student Export Pdf Report By Id
  Validate GET /api/v1/reports/student/{id}/export/pdf endpoint

  Scenario: GET Get Student Export Pdf Report By Id returns successful response
    When I send a GET request to endpoint "getStudentExportPdfReportById" with id "{STORED_PDF_ID}"
    Then the response status should be 200
