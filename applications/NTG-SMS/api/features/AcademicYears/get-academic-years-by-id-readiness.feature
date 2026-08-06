@getReadinesAcademicYearById

Feature: Get Readines Academic Year By Id
  Validate GET /api/v1/academic-years/{id}/readiness endpoint

  Scenario: GET Get Readines Academic Year By Id returns successful response
    When I send a GET request to endpoint "getReadinesAcademicYearById" with id "{STORED_READINES_ID}"
    Then the response status should be 200
