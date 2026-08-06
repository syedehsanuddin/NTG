@getAcademicSubjectReport

Feature: Get Academic Subject Report
  Validate GET /api/v1/reports/academic/subject/{subjectId} endpoint

  Scenario: GET Get Academic Subject Report returns successful response
    When I send a GET request to endpoint "getAcademicSubjectReport" with id "{STORED_SUBJECT_ID}"
    Then the response status should be 200
