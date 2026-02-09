# @postRefreshToken

# Feature: Refresh access token
#   Validate POST /api/v1/auth/refresh endpoint

#   Scenario: POST Refresh access token returns successful response
#     When I send a POST request to endpoint "postRefreshToken" with payload "{}"
#     Then the response status should be 201
#     And the response should have field "data"
