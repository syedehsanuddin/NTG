@getStudentReportById

Feature: Get Student Report By Id
  Validate GET /api/v1/reports/student/{id} endpoint

  Scenario: GET Get Student Report By Id returns successful response
    When I send a GET request to endpoint "getStudentReportById" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
