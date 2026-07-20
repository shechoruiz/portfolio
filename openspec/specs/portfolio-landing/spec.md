# Landing Section Specification

## Purpose

The Portfolio Landing section (hero) introduces Sergio Ruiz at first glance. It displays the developer's name, role badges for core technologies, call-to-action buttons, a profile image, and social links — responsive across all viewport sizes.

## Requirements

### Requirement: Display full name and title
The landing section MUST show "Sergio Ruiz" as the primary heading and a descriptive subtitle identifying the developer as a fullstack developer.

#### Scenario: Hero renders with developer identity
- GIVEN the portfolio page loads
- WHEN the landing section renders
- THEN the user sees "Sergio Ruiz" as a heading element
- AND a subtitle describing a fullstack developer role

### Requirement: Render role badges
The landing section SHALL display badges for "React", "React Native", "TypeScript", and "Node.js" — representing the developer's core stack — visible without scrolling.

#### Scenario: Core stack badges are displayed
- GIVEN the landing section is rendered
- WHEN the user views the hero area
- THEN badges for React, React Native, TypeScript, and Node.js are visible

#### Scenario: Empty badge data
- GIVEN badge data is an empty array or undefined
- WHEN the landing section renders
- THEN no badges SHALL render
- AND no layout gap or error SHALL appear

### Requirement: Provide CTA buttons
The landing section SHALL render two CTA buttons — one linking to Projects and one to Contact — that scroll smoothly to their targets.

#### Scenario: CTA buttons navigate to sections
- GIVEN the landing section is visible
- WHEN the user clicks "View Projects"
- THEN the page scrolls smoothly to the Projects section

### Requirement: Display developer image
The landing section SHALL render a profile image with alt text. The image MUST be responsive: it SHALL scale down on smaller viewports and MUST NOT exceed its container width.

#### Scenario: Profile image renders on desktop
- GIVEN the landing section renders on a desktop viewport (≥992px)
- WHEN the user inspects the hero area
- THEN a developer image is displayed with a descriptive alt attribute

#### Scenario: Image scales down on mobile
- GIVEN the landing section renders on mobile (<576px)
- WHEN the user inspects the hero area
- THEN the image width does not exceed the viewport width
- AND the image maintains aspect ratio

#### Scenario: Missing image source
- GIVEN the image source is missing or fails to load
- WHEN the landing section renders
- THEN a fallback placeholder SHALL be shown
- AND the layout MUST NOT collapse

### Requirement: Render social links
The landing section MUST show links to GitHub (https://github.com/shechoruiz) and LinkedIn (https://www.linkedin.com/in/shechoruiz/). Each link MUST open in a new tab with `rel="noopener noreferrer"`.

#### Scenario: Social links open correct profiles
- GIVEN the landing section renders
- WHEN the user clicks the GitHub icon
- THEN a new tab opens at https://github.com/shechoruiz
- AND `rel="noopener noreferrer"` is set

### Requirement: Responsive hero layout
The landing section MUST adapt across mobile (<576px), tablet (≥576px), and desktop (≥992px). On mobile, image and text SHALL stack vertically.

#### Scenario: Mobile layout stacks vertically
- GIVEN the viewport width is <576px
- WHEN the landing section renders
- THEN the developer image and text stack in a single column
- AND all content fits without horizontal scrolling
