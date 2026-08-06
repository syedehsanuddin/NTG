@getByClasTeacherAssignment

Feature: Get By Clas Teacher Assignment
  Validate GET /api/v1/teacher-assignments/by-class/{classSectionId} endpoint

  Scenario: GET Get By Clas Teacher Assignment returns successful response
    When I send a GET request to endpoint "getByClasTeacherAssignment" with id "{STORED_BYCLAS_ID}"
    Then the response status should be 200
