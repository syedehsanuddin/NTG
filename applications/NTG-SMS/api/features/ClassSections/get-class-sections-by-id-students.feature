@getStudentClassSectionById

Feature: Get Student Class Section By Id
  Validate GET /api/v1/class-sections/{id}/students endpoint

  Scenario: GET Get Student Class Section By Id returns successful response
    When I send a GET request to endpoint "getStudentClassSectionById" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
