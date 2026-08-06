@postCreateSection

Feature: Post Create Section
  Validate POST /api/v1/sections endpoint

  Scenario: POST Post Create Section returns successful response
    When I send a POST request to endpoint "postCreateSection" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
