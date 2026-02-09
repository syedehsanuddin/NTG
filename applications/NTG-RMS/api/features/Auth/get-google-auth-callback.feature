# @getGoogleAuthCallback

# Feature: Google OAuth callback
#   Validate GET /api/v1/auth/google/callback endpoint

#   Scenario: GET Google OAuth callback returns successful response
#     When I send a GET request to endpoint "getGoogleAuthCallback"
#     Then the response status should be 200
#     And the response should be a valid JSON array
#     And the response array should contain at least 1 item
