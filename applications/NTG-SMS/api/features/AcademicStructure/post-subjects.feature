@postCreateSubject

Feature: Post Create Subject
  Validate POST /api/v1/subjects endpoint

  Scenario: POST Post Create Subject returns successful response
    When I send a POST request to endpoint "postCreateSubject" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
