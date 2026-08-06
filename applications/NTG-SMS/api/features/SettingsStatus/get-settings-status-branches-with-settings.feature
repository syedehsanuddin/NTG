@getBranchesWithSettingSettingsStatu

Feature: Get Branches With Setting Settings Statu
  Validate GET /api/v1/settings-status/branches-with-settings endpoint

  Scenario: GET Get Branches With Setting Settings Statu returns successful response
    When I send a GET request to endpoint "getBranchesWithSettingSettingsStatu"
    Then the response status should be 200
