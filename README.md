# test-projects

## Simple Node.js Web Server

A minimal web server built with Node.js using the built-in `http` module.

### Features

- Serves HTML content on multiple routes
- Handles 404 errors for unknown routes
- Configurable port via environment variable

### Prerequisites

- Node.js installed (v12 or higher recommended)

### Installation

No additional dependencies needed! This server uses only Node.js built-in modules.

### Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and visit:
   - `http://localhost:3000/` - Home page
   - `http://localhost:3000/about` - About page

3. To use a custom port:
   ```bash
   PORT=8080 npm start
   ```

### Routes

- `/` - Home page with welcome message
- `/about` - About page with server information
- Any other route - Returns 404 Not Found