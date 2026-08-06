@postResendInvitation

Feature: Post Resend Invitation
  Validate POST /api/v1/invitations/resend endpoint

  Scenario: POST Post Resend Invitation returns successful response
    When I send a POST request to endpoint "postResendInvitation" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
