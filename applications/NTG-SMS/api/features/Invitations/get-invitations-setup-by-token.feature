@getSetupInvitation

Feature: Get Setup Invitation
  Validate GET /api/v1/invitations/setup/{token} endpoint

  Scenario: GET Get Setup Invitation returns successful response
    When I send a GET request to endpoint "getSetupInvitation" with id "{STORED_SETUP_ID}"
    Then the response status should be 200
