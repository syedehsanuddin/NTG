@postCreateClassSection

Feature: Post Create Class Section
  Validate POST /api/v1/class-sections endpoint

  Scenario: POST Post Create Class Section returns successful response
    When I send a POST request to endpoint "postCreateClassSection" with payload '"string"'
    Then the response status should be 201
