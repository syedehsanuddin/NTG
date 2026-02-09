@postPushSync

Feature: Push local changes to server
  Validate POST /api/v1/sync/push endpoint

  Scenario: POST Push local changes to server returns successful response
    When I send a POST request to endpoint "postPushSync" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
