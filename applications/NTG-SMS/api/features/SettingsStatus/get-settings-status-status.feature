@getStatuSettingsStatu

Feature: Get Statu Settings Statu
  Validate GET /api/v1/settings-status/status endpoint

  Scenario: GET Get Statu Settings Statu returns successful response
    When I send a GET request to endpoint "getStatuSettingsStatu"
    Then the response status should be 200
