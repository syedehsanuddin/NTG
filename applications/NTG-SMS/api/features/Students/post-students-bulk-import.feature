@postBulkImportStudent

Feature: Post Bulk Import Student
  Validate POST /api/v1/students/bulk-import endpoint

  Scenario: POST Post Bulk Import Student returns successful response
    When I send a POST request to endpoint "postBulkImportStudent" with payload '"string"'
    Then the response status should be 201
