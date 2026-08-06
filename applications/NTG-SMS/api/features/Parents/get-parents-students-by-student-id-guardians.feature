@getStudentGuardianParent

Feature: Get Student Guardian Parent
  Validate GET /api/v1/parents/students/{studentId}/guardians endpoint

  Scenario: GET Get Student Guardian Parent returns successful response
    When I send a GET request to endpoint "getStudentGuardianParent" with id "{STORED_GUARDIAN_ID}"
    Then the response status should be 200
