@getStudentAcademicReportById

Feature: Get Student Academic Report By Id
  Validate GET /api/v1/reports/student/{id}/academic endpoint

  Scenario: GET Get Student Academic Report By Id returns successful response
    When I send a GET request to endpoint "getStudentAcademicReportById" with id "{STORED_ACADEMIC_ID}"
    Then the response status should be 200
