@getSettingsByKey

Feature: Get Settings
  Validate GET /api/v1/settings/{key} endpoint

  Scenario: GET Get Settings returns successful response
    When I send a GET request to endpoint "getSettingsByKey" with id "{STORED_SETTING_ID}"
    Then the response status should be 200
