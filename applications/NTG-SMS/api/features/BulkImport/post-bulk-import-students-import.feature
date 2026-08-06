@postStudentImportBulkImport

Feature: Post Student Import Bulk Import
  Validate POST /api/v1/bulk-import/students/import endpoint

  Scenario: POST Post Student Import Bulk Import returns successful response
    When I send a POST request to endpoint "postStudentImportBulkImport" with payload '"string"'
    Then the response status should be 201
