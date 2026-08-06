@postCreateBranche

Feature: Post Create Branche
  Validate POST /api/v1/branches endpoint

  Scenario: POST Post Create Branche returns successful response
    When I send a POST request to endpoint "postCreateBranche" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
