@postStudentPreviewBulkImport

Feature: Post Student Preview Bulk Import
  Validate POST /api/v1/bulk-import/students/preview endpoint

  Scenario: POST Post Student Preview Bulk Import returns successful response
    When I send a POST request to endpoint "postStudentPreviewBulkImport" with payload '{"file":"string"}'
    Then the response status should be 201
