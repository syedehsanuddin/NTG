@patchLockAcademicYear

Feature: Patch Lock Academic Year
  Validate PATCH /api/v1/academic-years/{id}/lock endpoint

  Scenario: PATCH Patch Lock Academic Year returns successful response
    When I send a PATCH request to endpoint "patchLockAcademicYear" with id "{STORED_LOCK_ID}" and payload '"string"'
    Then the response status should be 200
