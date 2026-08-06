@postStudentValidateBulkImport

Feature: Post Student Validate Bulk Import
  Validate POST /api/v1/bulk-import/students/validate endpoint

  Scenario: POST Post Student Validate Bulk Import returns successful response
    When I send a POST request to endpoint "postStudentValidateBulkImport" with payload '"string"'
    Then the response status should be 201
