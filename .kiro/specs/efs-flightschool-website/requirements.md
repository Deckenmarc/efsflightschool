# Requirements Document

## Introduction

The EFS Flightschool Website is a single-page, static, mobile-responsive website designed to showcase EFS Flightschool's aviation training services, fleet, team, and locations. The site will be built using modern web technologies (Vite + React) and deployed as static HTML/CSS/JS. All content is presented on one page with smooth-scrolling navigation to different sections. The website targets prospective flight students, charter clients, and individuals interested in trial flights, presenting information in a professional, aviation-themed design with clear navigation and compelling visuals.

## Glossary

- **Website**: The EFS Flightschool single-page static website application
- **User**: Any visitor accessing the website through a web browser
- **Navigation Component**: The fixed header menu providing anchor links to different sections on the same page
- **Section**: A distinct content area on the single page (e.g., Hero, PPL Training, Fleet, etc.)
- **Hero Section**: The prominent banner area at the top of the page
- **Fleet Card**: A visual component displaying aircraft specifications
- **Smooth Scroll**: An animated scrolling behavior when navigating between sections
- **Responsive Layout**: A design that adapts to different screen sizes
- **Static Site**: A website with pre-rendered HTML pages requiring no server-side processing

## Requirements

### Requirement 1: Website Navigation

**User Story:** As a User, I want to navigate between different sections of the website, so that I can quickly find information about training, fleet, charter services, team, locations, and contact details.

#### Acceptance Criteria

1. THE Website SHALL display a fixed navigation header with anchor links to Home, PPL-Ausbildung, Unsere Flotte, Charter, Trialflights, Team, Standorte, and Kontakt sections on the same page
2. WHEN a User clicks a navigation link, THE Website SHALL perform a smooth scroll animation to the corresponding section on the same page
3. THE Navigation Component SHALL remain fixed at the top of the viewport while scrolling
4. THE Navigation Component SHALL display the EFS Flightschool logo on the left side
5. THE Navigation Component SHALL use background color #012B36 with text color #FBF7E4
6. WHEN a User hovers over a navigation link, THE Website SHALL change the link color to #F37626
7. WHEN the viewport width is less than 768 pixels, THE Navigation Component SHALL collapse into a hamburger menu

### Requirement 2: Hero Banner Display

**User Story:** As a User, I want to see an engaging hero banner when I land on the homepage, so that I immediately understand what EFS Flightschool offers.

#### Acceptance Criteria

1. THE Website SHALL display a full-width hero banner with a high-resolution aircraft image as background
2. THE Hero Section SHALL display the heading "EFS Flightschool – Privatpiloten-Ausbildung und Flugerlebnis"
3. THE Hero Section SHALL display the subtext "Ganzjährige Pilotenausbildung, Charter, Schnupperflüge – ab Stuttgart und Mallorca"
4. THE Hero Section SHALL maintain a minimum height of 500 pixels on desktop viewports
5. WHEN the viewport width is less than 768 pixels, THE Hero Section SHALL stack text elements vertically and reduce minimum height to 300 pixels

### Requirement 3: PPL Training Information

**User Story:** As a prospective flight student, I want to learn about the PPL training program, so that I can understand the training options and benefits offered.

#### Acceptance Criteria

1. THE Website SHALL display a PPL-Ausbildung section with background color #F5FAFF
2. THE Website SHALL display the title "PPL-Ausbildung (Private Pilot License)"
3. THE Website SHALL display descriptive text about PPL-365 training program
4. THE Website SHALL display a bulleted list with icons showing: Theoriekurse & Praxis das ganze Jahr, Schulung auf modernen Flugzeugen, Internationale Flughäfen, BZF-I (Englisch) Nachtflugberechtigung, and Sprechfunk auf FR und ES
5. THE Website SHALL display a relevant training image showing classroom or aircraft instruction
6. WHEN the viewport width is less than 768 pixels, THE Website SHALL stack the text and image vertically

### Requirement 4: Fleet Showcase

**User Story:** As a User, I want to view detailed information about the aircraft fleet, so that I can see the available training and charter aircraft.

#### Acceptance Criteria

1. THE Website SHALL display an Unsere Flotte section with background color #FBF7E4
2. THE Website SHALL display the title "Unsere Flotte"
3. THE Website SHALL display descriptive text about the modern training aircraft
4. THE Website SHALL display four Fleet Cards for: Piper Turbo Arrow IV, Socata TB20 Trinidad, Cessna FR 172 F Rocket, and Tecnam 2006 TC
5. EACH Fleet Card SHALL display aircraft name, power rating, IFR capability, and seating capacity
6. EACH Fleet Card SHALL display a high-quality aircraft image
7. WHEN the viewport width is less than 768 pixels, THE Website SHALL display Fleet Cards in a single column layout

### Requirement 5: Charter Services Information

**User Story:** As a potential charter client, I want to learn about aircraft charter services, so that I can understand the flexibility and options available.

#### Acceptance Criteria

1. THE Website SHALL display a Flugzeugcharter section with background color #FFFFFF
2. THE Website SHALL display the title "Flugzeugcharter"
3. THE Website SHALL display descriptive text about charter services including self-pilot and instructor-accompanied options
4. THE Website SHALL display a relevant charter image showing aircraft preparation or passengers
5. WHEN the viewport width is less than 768 pixels, THE Website SHALL stack the text and image vertically

### Requirement 6: Trial Flight Information

**User Story:** As a User interested in experiencing flight, I want to learn about trial flights, so that I can book a discovery flight experience.

#### Acceptance Criteria

1. THE Website SHALL display a Trialflights section with background color #F5FAFF
2. THE Website SHALL display the title "Trialflights/Schnupperflug"
3. THE Website SHALL display descriptive text about 60-minute trial flights from Mallorca and Stuttgart
4. THE Website SHALL display a bulleted list showing: Familiärer Rundflug oder Gruppenerlebnis and Individuelle Termine, mehrmals täglich
5. THE Website SHALL display a relevant image showing cockpit view or aerial scenery
6. WHEN the viewport width is less than 768 pixels, THE Website SHALL stack the text and image vertically

### Requirement 7: Team Profiles

**User Story:** As a User, I want to see information about the EFS Flightschool team, so that I can learn about the experience and expertise of the instructors and management.

#### Acceptance Criteria

1. THE Website SHALL display a Team section with background color #FBF7E4
2. THE Website SHALL display the title "Unser Team"
3. THE Website SHALL display three team member profiles for: Gregor Schulz, Marcus Schulz, and Erika Elsser
4. EACH team profile SHALL display a photo, name, title, and brief description
5. THE Website SHALL display Gregor Schulz as "General Manager/Cpt. i.R." with ">50 Jahre Erfahrung"
6. THE Website SHALL display Marcus Schulz as "Safetypilot" with experience description
7. THE Website SHALL display Erika Elsser as "CEO" with "40 Jahre Organisation Fliegerei"
8. WHEN the viewport width is less than 768 pixels, THE Website SHALL display team profiles in a single column layout

### Requirement 8: Location Information

**User Story:** As a User, I want to see the locations where EFS Flightschool operates, so that I can find the nearest training facility.

#### Acceptance Criteria

1. THE Website SHALL display a Standorte section with background color #FFFFFF
2. THE Website SHALL display the title "Standorte"
3. THE Website SHALL display Stuttgart location with ICAO code EDDS and address "Julius-Hölder-Str. 48, 70597 Stuttgart"
4. THE Website SHALL display Mallorca location with ICAO code LESB and address "Edificio 8, Ctra.Palma-Inca km 6, 07141 Marratxi"
5. THE Website SHALL display relevant location images or map visualization
6. WHEN the viewport width is less than 768 pixels, THE Website SHALL stack location information vertically

### Requirement 9: Contact Information

**User Story:** As a User, I want to find contact information easily, so that I can reach out to EFS Flightschool with questions or booking requests.

#### Acceptance Criteria

1. THE Website SHALL display a Kontakt section with background color #012B36
2. THE Website SHALL display the title "Kontakt" in color #FBF7E4
3. THE Website SHALL display email address "contact@efsflightschool.com"
4. THE Website SHALL display phone numbers "+49 711 720 714 87" and "+49 171 65 02 219"
5. THE Website SHALL display contact information in color #FBF7E4
6. THE Website SHALL display a contact icon or relevant image

### Requirement 10: Footer Display

**User Story:** As a User, I want to access legal information and copyright details, so that I can review terms, privacy policy, and imprint.

#### Acceptance Criteria

1. THE Website SHALL display a footer section at the bottom of the page
2. THE Website SHALL display links to AGB, Datenschutz, and Impressum in the footer
3. THE Website SHALL display a copyright notice in the footer
4. THE Website SHALL use background color #012B36 for the footer
5. THE Website SHALL display footer text in color #FBF7E4

### Requirement 11: Responsive Design

**User Story:** As a User on a mobile device, I want the website to display properly on my screen, so that I can access all information comfortably.

#### Acceptance Criteria

1. WHEN the viewport width is less than 768 pixels, THE Responsive Layout SHALL display all sections in single-column format
2. WHEN the viewport width is less than 768 pixels, THE Responsive Layout SHALL adjust font sizes for readability
3. WHEN the viewport width is less than 768 pixels, THE Responsive Layout SHALL ensure images scale proportionally
4. THE Responsive Layout SHALL maintain minimum touch target sizes of 44x44 pixels for interactive elements on mobile devices
5. THE Responsive Layout SHALL ensure all content remains accessible without horizontal scrolling

### Requirement 12: Visual Design System

**User Story:** As a User, I want the website to have a cohesive, professional aviation-themed design, so that I have confidence in the flight school's quality and professionalism.

#### Acceptance Criteria

1. THE Website SHALL use primary color #012B36 for header and footer backgrounds
2. THE Website SHALL use accent color #F37626 for interactive elements and highlights
3. THE Website SHALL use background colors #F5FAFF and #FBF7E4 for alternating sections
4. THE Website SHALL use typography from the Montserrat, Lato, or Poppins font families
5. THE Website SHALL use button styling with #F37626 background, 6px border-radius, and white bold text
6. THE Website SHALL maintain consistent spacing of approximately 2em padding top and bottom for each section
7. THE Website SHALL use aviation-themed icons for bullet points and section highlights

### Requirement 13: Performance and Accessibility

**User Story:** As a User, I want the website to load quickly and be accessible, so that I can access information efficiently regardless of my connection speed or abilities.

#### Acceptance Criteria

1. THE Website SHALL load the initial viewport content within 3 seconds on a standard broadband connection
2. THE Website SHALL optimize all images for web delivery with appropriate compression
3. THE Website SHALL implement lazy loading for images below the fold
4. THE Website SHALL include appropriate alt text for all images
5. THE Website SHALL maintain a minimum color contrast ratio of 4.5:1 for body text
6. THE Website SHALL be navigable using keyboard controls
7. THE Website SHALL include appropriate ARIA labels for interactive elements
