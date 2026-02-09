# @getGoogleAuth

# Feature: Initiate Google OAuth login
#   Validate GET /api/v1/auth/google endpoint

#   Scenario: GET Initiate Google OAuth login returns successful response
#     When I send a GET request to endpoint "getGoogleAuth"
#     Then the response status should be 200
#     And the response should be a valid JSON array
#     And the response array should contain at least 1 item
