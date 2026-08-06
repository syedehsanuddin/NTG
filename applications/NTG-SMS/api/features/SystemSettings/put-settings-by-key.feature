@putUpdateSetting

Feature: Put Update Setting
  Validate PUT /api/v1/settings/{key} endpoint

  Scenario: PUT Put Update Setting returns successful response
    When I send a PUT request to endpoint "putUpdateSetting" with id "{STORED_SETTING_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
