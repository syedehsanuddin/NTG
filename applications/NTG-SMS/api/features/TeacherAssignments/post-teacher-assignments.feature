@postCreateTeacherAssignment

Feature: Post Create Teacher Assignment
  Validate POST /api/v1/teacher-assignments endpoint

  Scenario: POST Post Create Teacher Assignment returns successful response
    When I send a POST request to endpoint "postCreateTeacherAssignment" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
