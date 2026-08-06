@patchAdminUnlockAcademicYear

Feature: Patch Admin Unlock Academic Year
  Validate PATCH /api/v1/academic-years/admin/{id}/unlock endpoint

  Scenario: PATCH Patch Admin Unlock Academic Year returns successful response
    When I send a PATCH request to endpoint "patchAdminUnlockAcademicYear" with id "{STORED_UNLOCK_ID}" and payload '"string"'
    Then the response status should be 200
