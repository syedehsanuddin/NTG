@getClassSectionBulkPdfResult

Feature: Get Class Section Bulk Pdf Result
  Validate GET /api/v1/results/class-section/{classSectionId}/bulk-pdf endpoint

  Scenario: GET Get Class Section Bulk Pdf Result returns successful response
    When I send a GET request to endpoint "getClassSectionBulkPdfResult" with id "{STORED_BULKPDF_ID}"
    Then the response status should be 200
