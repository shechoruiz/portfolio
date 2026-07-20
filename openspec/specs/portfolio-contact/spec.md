# Contact Section Specification

## Purpose

The Contact section provides a form that sends messages via EmailJS API. It collects name, email, and message; validates input; submits via EmailJS; and displays success or error feedback.

## Requirements

### Requirement: Render contact form fields
The Contact form MUST render three fields: "Name", "Email", and "Message". Each field MUST have an associated `<label>`. The Email field MUST use `type="email"`. The Message field MUST be a `<textarea>`.

#### Scenario: Form renders with all required fields
- GIVEN the Contact section is rendered
- WHEN the user views the form
- THEN three labeled fields are visible: Name, Email, and Message
- AND the Email field uses `type="email"`
- AND the Message field is a multi-line `<textarea>`

### Requirement: Validate form input before submission
The form MUST validate that: (1) Name is not empty, (2) Email is a valid format, (3) Message is not empty and exceeds 10 characters. Validation errors SHALL appear inline below the respective field.

#### Scenario: All fields pass validation
- GIVEN Name is "Sergio", Email is "test@example.com", and Message is "Hello, I'd like to discuss a project"
- WHEN the user clicks Submit
- THEN the form submits to EmailJS
- AND no inline errors are displayed

#### Scenario: Empty fields show inline errors
- GIVEN all three fields are empty
- WHEN the user clicks Submit
- THEN the form SHALL NOT submit
- AND inline errors appear for each field indicating they are required

#### Scenario: Invalid email format
- GIVEN the Email field contains "not-an-email"
- WHEN the user clicks Submit
- THEN the form SHALL NOT submit
- AND an inline error indicates the email format is invalid

#### Scenario: Message too short
- GIVEN the Message is shorter than 10 characters (e.g., "Hi")
- WHEN the user clicks Submit
- THEN the form SHALL NOT submit
- AND an inline error asks for a longer message

### Requirement: Submit via EmailJS API
On successful validation, the form MUST send data to the EmailJS API using the official SDK. The EmailJS service ID and template ID MUST be configurable — never hardcoded.

#### Scenario: Successful EmailJS submission
- GIVEN all fields pass validation
- AND EmailJS service ID and template ID are configured
- WHEN the user clicks Submit
- THEN the form calls EmailJS API with the correct payload
- AND a success message is displayed

#### Scenario: EmailJS API returns an error
- GIVEN all fields pass validation
- AND the EmailJS API call fails
- WHEN the form attempts to submit
- THEN the form displays an error message
- AND the user's input remains in the fields

### Requirement: Prevent duplicate submissions
While submitting, the Submit button MUST be disabled and show a loading state (e.g., "Sending..."). The form MUST re-enable after success or failure.

#### Scenario: Button disabled during submission
- GIVEN the form is submitting to EmailJS
- WHEN the user clicks Submit again during the request
- THEN the action is ignored
- AND the button displays a loading indicator

### Requirement: Clear form on success
After a successful EmailJS submission, the form fields MUST clear and a success confirmation SHALL appear. The confirmation SHOULD be dismissible.

#### Scenario: Form clears after successful send
- GIVEN the form has submitted successfully to EmailJS
- WHEN the API returns a success response
- THEN all form fields are cleared
- AND a success message is visible

### Requirement: Responsive contact layout
The Contact layout MUST adapt across viewports. On mobile (<576px), the form SHALL span full container width. On desktop (≥992px), the form MAY be constrained to a centered column.

#### Scenario: Full-width form on mobile
- GIVEN the viewport width is <576px
- WHEN the Contact section renders
- THEN the form spans the full container width
- AND all fields are fully visible without horizontal scroll
