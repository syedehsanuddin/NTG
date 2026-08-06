@postBreakdownRefreshStorage

Feature: Post Breakdown Refresh Storage
  Validate POST /api/v1/storage/breakdown/refresh endpoint

  Scenario: POST Post Breakdown Refresh Storage returns successful response
    When I send a POST request to endpoint "postBreakdownRefreshStorage" with payload '"string"'
    Then the response status should be 201
