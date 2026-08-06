@getByTeacherTeacherAssignment

Feature: Get By Teacher Teacher Assignment
  Validate GET /api/v1/teacher-assignments/by-teacher/{staffId} endpoint

  Scenario: GET Get By Teacher Teacher Assignment returns successful response
    When I send a GET request to endpoint "getByTeacherTeacherAssignment" with id "{STORED_BYTEACHER_ID}"
    Then the response status should be 200
