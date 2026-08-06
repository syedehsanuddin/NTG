@getTeacherAssignments

Feature: Get Teacher Assignments
  Validate GET /api/v1/teacher-assignments endpoint

  Scenario: GET Get Teacher Assignments returns successful response
    When I send a GET request to endpoint "getTeacherAssignments"
    Then the response status should be 200
