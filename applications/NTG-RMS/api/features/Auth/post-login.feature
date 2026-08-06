@postLogin @happyFlow

Feature: Login user
  Validate POST /api/v1/auth/login endpoint

  Scenario: POST Login user returns successful response
    When I send a POST request to endpoint "postLogin" with payload '{"email": "hn@mailinator.com","password": "A12345678"}'
    Then the response status should be 200
    # And the response should have field "data"
