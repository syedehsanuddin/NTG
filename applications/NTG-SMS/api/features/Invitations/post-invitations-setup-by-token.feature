@postSetupInvitation

Feature: Post Setup Invitation
  Validate POST /api/v1/invitations/setup/{token} endpoint

  Scenario: POST Post Setup Invitation returns successful response
    When I send a POST request to endpoint "postSetupInvitation" with id "{STORED_SETUP_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 201
