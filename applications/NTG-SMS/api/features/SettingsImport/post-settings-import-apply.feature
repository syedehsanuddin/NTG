@postApplySettingsImport

Feature: Post Apply Settings Import
  Validate POST /api/v1/settings-import/apply endpoint

  Scenario: POST Post Apply Settings Import returns successful response
    When I send a POST request to endpoint "postApplySettingsImport" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
