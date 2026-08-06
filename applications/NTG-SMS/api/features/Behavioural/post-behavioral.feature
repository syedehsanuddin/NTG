@postCreateBehavioral

Feature: Post Create Behavioral
  Validate POST /api/v1/behavioral endpoint

  Scenario: POST Post Create Behavioral returns successful response
    When I send a POST request to endpoint "postCreateBehavioral" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
