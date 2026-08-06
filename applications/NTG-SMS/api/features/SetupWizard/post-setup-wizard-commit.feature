@postCommitSetupWizard

Feature: Post Commit Setup Wizard
  Validate POST /api/v1/setup-wizard/commit endpoint

  Scenario: POST Post Commit Setup Wizard returns successful response
    When I send a POST request to endpoint "postCommitSetupWizard" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
