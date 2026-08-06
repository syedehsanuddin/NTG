@deleteSlotTimetable

Feature: Delete Slot Timetable
  Validate DELETE /api/v1/timetable/slots/{id} endpoint

  Scenario: POST Create a new slot returns successful response
    When I send a POST request to endpoint "postSlotTimetable" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as slot id

  Scenario: DELETE Delete Slot Timetable returns successful response
    When I send a DELETE request to endpoint "deleteSlotTimetable" with id "{STORED_SLOT_ID}"
    Then the response status should be 200
