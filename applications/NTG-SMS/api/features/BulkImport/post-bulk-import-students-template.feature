@postStudentTemplateBulkImport

Feature: Post Student Template Bulk Import
  Validate POST /api/v1/bulk-import/students/template endpoint

  Scenario: POST Post Student Template Bulk Import returns successful response
    When I send a POST request to endpoint "postStudentTemplateBulkImport" with payload '"string"'
    Then the response status should be 201
