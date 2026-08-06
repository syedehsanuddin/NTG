@postCreateLibrary

Feature: Post Create Library
  Validate POST /api/v1/library endpoint

  Scenario: POST Post Create Library returns successful response
    When I send a POST request to endpoint "postCreateLibrary" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
