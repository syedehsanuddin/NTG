@postReinviteInvitationStudent

Feature: Post Reinvite Invitation Student
  Validate POST /api/v1/students/{id}/reinvite-invitation endpoint

  Scenario: POST Post Reinvite Invitation Student returns successful response
    When I send a POST request to endpoint "postReinviteInvitationStudent" with id "{STORED_REINVITEINVITATION_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
