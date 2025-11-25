# UI Test Automation

This directory contains UI test automation using Playwright with TypeScript.

## Structure

```
ui/
├── pages/              # Page Object Model classes
│   ├── loginPage.ts
│   ├── ticketListPage.ts
│   ├── createTicketPage.ts
│   └── ticketDetailPage.ts
├── tests/              # Test files
│   ├── tickets/
│   └── comments/
└── utils/              # Helper utilities
    └── testHelpers.ts
```

## Running Tests

### Run all UI tests
```bash
npx playwright test --project=ui-tests
```

### Run specific test file
```bash
npx playwright test applications/ntg-ticket/ui/tests/tickets/createTicket.spec.ts
```

### Run with UI mode (interactive)
```bash
npx playwright test --project=ui-tests --ui
```

### Run in headed mode (see browser)
```bash
npx playwright test --project=ui-tests --headed
```

### Run specific test by name
```bash
npx playwright test --project=ui-tests -g "should create a ticket successfully"
```

## Configuration

- **Base URL**: `http://192.168.50.50:8080/` (configured in `playwright.config.ts`)
- **Browser**: Chrome (Desktop)
- **Viewport**: 1920x1080

## Updating Selectors

The Page Object classes use generic selectors that need to be updated based on your actual UI. Look for comments like:
```typescript
// Update these selectors based on your actual UI
```

### Common Selector Patterns

1. **By name attribute**: `input[name="email"]`
2. **By ID**: `#email`
3. **By data-testid**: `[data-testid="ticket-row"]`
4. **By text**: `button:has-text("Submit")`
5. **By CSS class**: `.ticket-list`

### Finding Selectors

1. Open your application in Chrome
2. Right-click on the element → Inspect
3. Use Playwright's codegen to generate selectors:
   ```bash
   npx playwright codegen http://192.168.50.50:8080
   ```

## Page Object Model

Each page has its own class with:
- **Locators**: Element selectors
- **Methods**: Actions on the page
- **Verification methods**: Assertions

Example:
```typescript
const ticketListPage = new TicketListPage(page);
await ticketListPage.goto();
await ticketListPage.clickCreateTicket();
```

## Test Helpers

Use helper functions from `utils/testHelpers.ts`:
- `loginAsUser()` - Login with default or custom credentials
- `generateTestTicketTitle()` - Generate unique test data
- `generateTestComment()` - Generate unique comment text

## Environment Variables

Set these in your `.env` file:
```
NTG_AUTH_EMAIL=admin@ntg-ticket.com
NTG_AUTH_PASSWORD=admin123
```

## Next Steps

1. **Update selectors** in Page Object classes based on your actual UI
2. **Test login flow** first to ensure authentication works
3. **Run a single test** to verify the setup
4. **Add more test cases** as needed

## Debugging

### View test execution
```bash
npx playwright test --project=ui-tests --headed --debug
```

### View test report
```bash
npx playwright show-report
```

### Take screenshots on failure
Screenshots are automatically saved on test failure in `test-results/`

