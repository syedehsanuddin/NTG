@postWithInvitationStudent

Feature: Post With Invitation Student
  Validate POST /api/v1/students/with-invitation endpoint

  Scenario: POST Post With Invitation Student returns successful response
    When I send a POST request to endpoint "postWithInvitationStudent" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
