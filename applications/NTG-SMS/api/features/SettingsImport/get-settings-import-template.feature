@getTemplateSettingsImport

Feature: Get Template Settings Import
  Validate GET /api/v1/settings-import/template endpoint

  Scenario: GET Get Template Settings Import returns successful response
    When I send a GET request to endpoint "getTemplateSettingsImport"
    Then the response status should be 200
