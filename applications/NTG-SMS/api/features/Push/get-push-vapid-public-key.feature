@getVapidPublicKeyPush

Feature: Get Vapid Public Key Push
  Validate GET /api/v1/push/vapid-public-key endpoint

  Scenario: GET Get Vapid Public Key Push returns successful response
    When I send a GET request to endpoint "getVapidPublicKeyPush"
    Then the response status should be 200
