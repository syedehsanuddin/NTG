@postCopyFromBranchSettingsStatu

Feature: Post Copy From Branch Settings Statu
  Validate POST /api/v1/settings-status/copy-from-branch endpoint

  Scenario: POST Post Copy From Branch Settings Statu returns successful response
    When I send a POST request to endpoint "postCopyFromBranchSettingsStatu" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
