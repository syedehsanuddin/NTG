@postStudentSubjectTemplateHelpBulkImport

Feature: Post Student Subject Template Help Bulk Import
  Validate POST /api/v1/bulk-import/students/subject-template-help endpoint

  Scenario: POST Post Student Subject Template Help Bulk Import returns successful response
    When I send a POST request to endpoint "postStudentSubjectTemplateHelpBulkImport" with payload '"string"'
    Then the response status should be 201
