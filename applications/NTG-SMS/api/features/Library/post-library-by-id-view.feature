@postViewLibrary

Feature: Post View Library
  Validate POST /api/v1/library/{id}/view endpoint

  Scenario: POST Post View Library returns successful response
    When I send a POST request to endpoint "postViewLibrary" with id "{STORED_VIEW_ID}" and payload '"string"'
    Then the response status should be 201
