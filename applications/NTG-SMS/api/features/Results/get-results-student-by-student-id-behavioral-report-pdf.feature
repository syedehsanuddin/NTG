@getStudentBehavioralReportPdfResult

Feature: Get Student Behavioral Report Pdf Result
  Validate GET /api/v1/results/student/{studentId}/behavioral-report/pdf endpoint

  Scenario: GET Get Student Behavioral Report Pdf Result returns successful response
    When I send a GET request to endpoint "getStudentBehavioralReportPdfResult" with id "{STORED_PDF_ID}"
    Then the response status should be 200
