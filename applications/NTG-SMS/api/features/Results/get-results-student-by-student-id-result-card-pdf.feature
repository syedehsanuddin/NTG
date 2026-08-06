@getStudentResultCardPdfResult

Feature: Get Student Result Card Pdf Result
  Validate GET /api/v1/results/student/{studentId}/result-card/pdf endpoint

  Scenario: GET Get Student Result Card Pdf Result returns successful response
    When I send a GET request to endpoint "getStudentResultCardPdfResult" with id "{STORED_PDF_ID}"
    Then the response status should be 200
