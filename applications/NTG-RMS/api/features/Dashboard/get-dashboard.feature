@getDashboard

Feature: Get dashboard data
  Validate GET /api/v1/dashboard endpoint

  Scenario: GET Get dashboard data returns successful response
    When I send a GET request to endpoint "getDashboard" with headers "branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191"
    Then the response status should be 200
    # And the response should be a valid JSON array
    # And the response array should contain at least 1 item
