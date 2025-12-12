# NTG Test Automation (NTA)

This is the NTA (NTG Test Automation) project for automated testing of the NTG Ticket System.

## 📋 Documentation

- **[TEST_PLAN.md](./TEST_PLAN.md)** - Comprehensive test plan covering all test cases, test strategy, and execution details
- **[TEST_MANAGEMENT.md](./TEST_MANAGEMENT.md)** - Test management structure, test case inventory, and tracking

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Running Tests

```bash
# Run all tests (API + UI)
npm test

# Run API tests only
npx playwright test --project=api-tests

# Run UI tests only
npx playwright test --project=ui-tests

# Run with UI mode (interactive)
npm run test:ui

# Run in headed mode (visible browser)
npm run test:headed

# View test report
npm run show-report
```

## 📁 Project Structure

```
applications/ntg-ticket/
├── api/                    # API tests (BDD/Cucumber)
│   ├── features/          # Gherkin feature files
│   └── step-definitions/  # Step definitions
└── ui/                     # UI tests (Playwright)
    ├── tests/             # Test specifications
    ├── pages/             # Page Object Models
    └── utils/             # Test helpers
```

## 🧪 Test Coverage

- **API Tests:** 32 test cases covering Tickets, Users, and Comments modules
- **UI Tests:** 12 test cases covering ticket and comment workflows
- **Total:** 44 test cases

See [TEST_PLAN.md](./TEST_PLAN.md) for detailed test coverage.

## 📊 Test Management

For test case tracking, execution history, and management, see [TEST_MANAGEMENT.md](./TEST_MANAGEMENT.md).

## 🛠️ Technologies

- **Playwright** - Browser automation and API testing
- **TypeScript** - Type-safe test development
- **Cucumber BDD** - Behavior-driven development for API tests
- **Page Object Model** - UI test organization pattern

## 📝 Author

Ahsan Uddin

