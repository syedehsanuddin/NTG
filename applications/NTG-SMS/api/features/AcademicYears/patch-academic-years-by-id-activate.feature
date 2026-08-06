@patchActivateAcademicYear

Feature: Patch Activate Academic Year
  Validate PATCH /api/v1/academic-years/{id}/activate endpoint

  Scenario: PATCH Patch Activate Academic Year returns successful response
    When I send a PATCH request to endpoint "patchActivateAcademicYear" with id "{STORED_ACTIVATE_ID}" and payload '"string"'
    Then the response status should be 200
