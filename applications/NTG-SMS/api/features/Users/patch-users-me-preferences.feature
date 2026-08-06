@patchMePreferenceUser

Feature: Patch Me Preference User
  Validate PATCH /api/v1/users/me/preferences endpoint

  Scenario: PATCH Patch Me Preference User returns successful response
    When I send a PATCH request to endpoint "patchMePreferenceUser" with payload '{"name":"Automated Test"}'
    Then the response status should be 200
