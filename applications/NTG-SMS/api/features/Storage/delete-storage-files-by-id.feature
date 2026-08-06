@deleteFileStorage

Feature: Delete File Storage
  Validate DELETE /api/v1/storage/files/{id} endpoint

  Scenario: DELETE Delete File Storage returns successful response
    When I send a DELETE request to endpoint "deleteFileStorage" with id "{STORED_FILE_ID}"
    Then the response status should be 200
