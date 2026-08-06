@postResendForUserInvitation

Feature: Post Resend For User Invitation
  Validate POST /api/v1/invitations/resend-for-user endpoint

  Scenario: POST Post Resend For User Invitation returns successful response
    When I send a POST request to endpoint "postResendForUserInvitation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
