@postUploadImageUniform

Feature: Post Upload Image Uniform
  Validate POST /api/v1/uniforms/upload-image endpoint

  Scenario: POST Post Upload Image Uniform returns successful response
    When I send a POST request to endpoint "postUploadImageUniform" with payload '"string"'
    Then the response status should be 201
