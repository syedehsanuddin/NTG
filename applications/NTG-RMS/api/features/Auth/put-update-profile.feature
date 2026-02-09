@putUpdateProfile

Feature: Update current user profile
  Validate PUT /api/v1/auth/profile endpoint

  Scenario: PUT Update current user profile returns successful response
    When I send a PUT request to endpoint "putUpdateProfile" with payload '{"name":"Automated Test","phone":"+923483985864"}'
    Then the response status should be 200
    # And the response should have field "data"
