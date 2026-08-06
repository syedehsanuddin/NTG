@postDownloadLibrary

Feature: Post Download Library
  Validate POST /api/v1/library/{id}/download endpoint

  Scenario: POST Post Download Library returns successful response
    When I send a POST request to endpoint "postDownloadLibrary" with id "{STORED_DOWNLOAD_ID}" and payload '"string"'
    Then the response status should be 201
