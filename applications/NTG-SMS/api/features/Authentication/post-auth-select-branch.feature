@postSelectBranchAuth

Feature: Post Select Branch Auth
  Validate POST /api/v1/auth/select-branch endpoint

  Scenario: POST Post Select Branch Auth returns successful response
    When I send a POST request to endpoint "postSelectBranchAuth" with payload '"string"'
    Then the response status should be 201
