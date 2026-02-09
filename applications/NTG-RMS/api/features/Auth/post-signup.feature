@postSignup

Feature: Register a new user
  Validate POST /api/v1/auth/signup endpoint

  Scenario: POST Register a new user returns successful response
    When I send a POST request to endpoint "postSignup" with payload '{"email":"{GENERATE_EMAIL}","password":"12345678","name":"Automated Test","phone":"+923483985864","defaultCurrency":"USD"}'
    Then the response status should be 201
    # And the response should have field "data"
