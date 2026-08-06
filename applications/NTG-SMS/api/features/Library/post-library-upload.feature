@postUploadLibrary

Feature: Post Upload Library
  Validate POST /api/v1/library/upload endpoint

  Scenario: POST Post Upload Library returns successful response
    When I send a POST request to endpoint "postUploadLibrary" with payload '"string"'
    Then the response status should be 201
