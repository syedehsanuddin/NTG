@getStudentUniformIssuance

Feature: Get Student Uniform Issuance
  Validate GET /api/v1/uniform-issuances/student/{studentId} endpoint

  Scenario: GET Get Student Uniform Issuance returns successful response
    When I send a GET request to endpoint "getStudentUniformIssuance" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
