@postGenerateResult

Feature: Post Generate Result
  Validate POST /api/v1/results/generate endpoint

  Scenario: POST Post Generate Result returns successful response
    When I send a POST request to endpoint "postGenerateResult" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
