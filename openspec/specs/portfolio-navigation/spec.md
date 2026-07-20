# Navigation Specification

## Purpose

The Navigation component provides a responsive Navbar that lets users move between portfolio sections (Landing, About, Projects, Contact). On mobile, it collapses into a hamburger menu. The active section is visually indicated, and links trigger smooth scrolling.

## Requirements

### Requirement: Render navigation links
The Navbar MUST render links for "Home", "About", "Projects", and "Contact". Each link SHALL scroll smoothly to its section.

#### Scenario: Section links scroll on click
- GIVEN the Navbar is rendered
- WHEN the user clicks "About"
- THEN the page scrolls smoothly to the About section
- AND the URL updates to include `#about`

#### Scenario: Home link scrolls to top
- GIVEN the user has scrolled to Projects
- WHEN the user clicks "Home" in the Navbar
- THEN the page scrolls smoothly to the top (Landing section)

### Requirement: Indicate active section
The Navbar MUST highlight the link for the section currently in the viewport. The highlight SHALL update as the user scrolls. Only one link SHALL be highlighted at a time.

#### Scenario: Active link updates on scroll
- GIVEN the user is viewing the About section
- WHEN the user scrolls down to Projects
- THEN "Projects" becomes highlighted
- AND "About" returns to default state

#### Scenario: Between sections (gap between sections)
- GIVEN two sections have a gap
- WHEN the viewport is in that gap
- THEN the Navbar MAY highlight the nearest section or default to "Home"
- AND no flickering SHALL occur

### Requirement: Collapse into hamburger menu on mobile
On viewports <576px, the Navbar SHALL collapse into a hamburger toggle. Links SHALL be hidden by default and revealed on toggle click.

#### Scenario: Hamburger toggles on mobile
- GIVEN the viewport width is <576px
- WHEN the page loads
- THEN links are hidden
- AND a hamburger icon is visible
- WHEN the user clicks the hamburger
- THEN links appear as a vertical list
- AND clicking the hamburger again hides the menu

#### Scenario: Link click closes mobile menu
- GIVEN the mobile hamburger menu is open
- WHEN the user clicks a navigation link
- THEN the menu closes
- AND the page scrolls to the target section

#### Scenario: Resize from mobile to desktop while menu is open
- GIVEN the mobile hamburger menu is open
- WHEN the viewport resizes to ≥768px
- THEN the Navbar transitions to horizontal layout
- AND the hamburger toggle is hidden

### Requirement: Fixed positioning
The Navbar MUST be fixed at the top of the viewport. It SHALL remain visible while scrolling. The background SHALL be opaque so content does not show through.

#### Scenario: Navbar stays visible during scroll
- GIVEN the Navbar is rendered
- WHEN the user scrolls down
- THEN the Navbar remains fixed at the viewport top
- AND content scrolls beneath without overlapping Navbar text

### Requirement: Keyboard and screen-reader accessibility
All links and the hamburger toggle MUST be keyboard-accessible via Tab and Enter/Space. The hamburger button SHALL have an `aria-label`. The expanded/collapsed state SHOULD be communicated to assistive technology.

#### Scenario: Keyboard navigation works
- GIVEN the Navbar is rendered
- WHEN the user presses Tab to focus links
- THEN each link shows a visible focus indicator
- AND pressing Enter on a focused link triggers smooth scroll
