@postSubscribePush

Feature: Post Subscribe Push
  Validate POST /api/v1/push/subscribe endpoint

  Scenario: POST Post Subscribe Push returns successful response
    When I send a POST request to endpoint "postSubscribePush" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
