@postStatisticVerifyPublic

Feature: Post Statistic Verify Public
  Validate POST /api/v1/public/statistics/{branchCode}/verify endpoint

  Scenario: POST Post Statistic Verify Public returns successful response
    When I send a POST request to endpoint "postStatisticVerifyPublic" with id "{STORED_VERIFY_ID}" and payload '"string"'
    Then the response status should be 201
