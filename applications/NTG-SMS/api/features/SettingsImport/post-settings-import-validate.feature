@postValidateSettingsImport

Feature: Post Validate Settings Import
  Validate POST /api/v1/settings-import/validate endpoint

  Scenario: POST Post Validate Settings Import returns successful response
    When I send a POST request to endpoint "postValidateSettingsImport" with payload '{"file":"string"}'
    Then the response status should be 201
