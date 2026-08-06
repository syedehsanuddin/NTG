# @getDashboard @happyFlow

Feature: Get dashboard data
  Validate GET /api/v1/dashboard endpoint

  Scenario: GET Get dashboard data returns successful response
    When I send a GET request to endpoint "getDashboard" with headers "branchId={BRANCH_ID}"
    Then the response status should be 200
    # And the response should be a valid JSON array
    # And the response array should contain at least 1 item
