@postBulkGrade

Feature: Post Bulk Grade
  Validate POST /api/v1/grades/bulk endpoint

  Scenario: POST Post Bulk Grade returns successful response
    When I send a POST request to endpoint "postBulkGrade" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
