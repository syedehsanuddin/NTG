@postCreateLevel

Feature: Post Create Level
  Validate POST /api/v1/levels endpoint

  Scenario: POST Post Create Level returns successful response
    When I send a POST request to endpoint "postCreateLevel" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
