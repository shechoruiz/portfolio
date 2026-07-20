# Projects Section Specification

## Purpose

The Projects section showcases three template project cards demonstrating Sergio Ruiz's technical abilities. Each card displays a title, description, technology badges, and optional links. The projects are fictitious but use the developer's real tech stack.

## Requirements

### Requirement: Render exactly three project cards
The Projects section MUST render exactly three cards. Each card MUST show a title, a description, a list of technology badges, and MAY include a link.

#### Scenario: Three project cards render on desktop
- GIVEN the portfolio page loads
- WHEN the user scrolls to the Projects section
- THEN exactly three project cards are displayed
- AND each card contains a title, description, and technology badges

#### Scenario: Empty project data
- GIVEN the projects data array is empty
- WHEN the Projects section renders
- THEN the section SHALL display a "No projects to display" fallback message
- AND no empty card containers SHALL render

#### Scenario: Duplicate project IDs
- GIVEN two projects share the same ID
- WHEN the Projects section renders
- THEN both cards SHALL still render
- AND each card uses a unique React key

### Requirement: Display realistic tech stack per project
Each template project MUST use realistic technologies from the developer's skill set. One project SHALL use React + TypeScript + Node.js, one SHALL use React Native, and one SHALL demonstrate fullstack capabilities.

#### Scenario: Diverse technology badges per card
- GIVEN the three cards are rendered
- WHEN the user inspects each card's badges
- THEN at least one card includes React, TypeScript, and Node.js
- AND at least one card includes React Native
- AND at least one card includes both frontend and backend badges

### Requirement: Cards link to external resources
Each card SHOULD have a "View Project" link. If a project has no URL, the link MUST be hidden gracefully — the card SHALL NOT display a disabled or broken link.

#### Scenario: Card renders with valid URL
- GIVEN a project has a non-empty URL
- WHEN the card renders
- THEN a "View Project" link is visible
- AND the link opens in a new tab with `rel="noopener noreferrer"`

#### Scenario: Card without URL
- GIVEN a project has an empty or null URL
- WHEN the card renders
- THEN no link is displayed
- AND the card layout remains intact

### Requirement: Responsive card grid
Cards MUST display in a responsive grid. On desktop (≥992px), cards SHALL appear in a row of three. On tablet (≥576px), in a row of two. On mobile (<576px), stacked in a single column.

#### Scenario: Cards stack on mobile
- GIVEN the viewport width is <576px
- WHEN the Projects section renders
- THEN the three cards stack vertically in a single column
- AND each card spans the full container width

#### Scenario: Three-column row on desktop
- GIVEN the viewport width is ≥992px
- WHEN the Projects section renders
- THEN the three cards are in a single horizontal row
- WITH evenly distributed gaps

### Requirement: Section visibility on scroll
The section MUST be navigable via `#projects` hash. Loading the page with the hash in the URL SHALL scroll to the Projects section.

#### Scenario: Section loads via hash link
- GIVEN the URL contains `#projects`
- WHEN the page loads
- THEN the Projects section is at the top of the viewport
- AND its content is visible
