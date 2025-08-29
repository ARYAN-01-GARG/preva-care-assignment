# Preva Care Assignment

## Overview
This project is a React-based interactive feature showcase, designed to highlight five distinct features in a visually engaging and responsive layout. The UI is split into two main sections: a left panel displaying an iPhone mockup and feature details, and a right panel with clickable feature points.

## Features & Requirements

### 1. Clickable Points (Right Side)
- **Interactive Points:** Five clickable points are displayed on the right side.
- **Active State:** Clicking a point sets it as active, indicated by a blue marker.
- **Content Update:** The active point updates the iPhone image, heading, and body text on the left panel.

### 2. Left/Right Arrows (Left Side)
- **Navigation:** Left and right arrows allow users to switch between features.
- **Content Sync:** Arrow navigation updates the iPhone image, heading, and body text, just like clicking a point.

### 3. Scroll Behavior
- **Sticky Section:** The feature section becomes sticky when it enters the viewport, remaining visible as the user scrolls.
- **Auto-Advance:** Scrolling within the sticky section automatically advances through features 1 to 5. After the last feature, normal page scrolling resumes.

### 4. Mobile Responsiveness
- **Mobile Layout:** The UI rearranges for mobile devices, ensuring tap-friendly controls and proper spacing for readability and usability.

## Tech Stack
- **Framework:** React (preferred)
- **Styling:** Any CSS approach (CSS Modules, Styled Components, Tailwind, etc.)
- **Self-contained:** All styles and logic are kept clean and modular for easy maintenance.

## Getting Started

### Cloning the Project
To clone and run this page locally:

```bash
git clone https://github.com/ARYAN-01-GARG/preva-care-assignment.git
cd preva-care-assignment
npm install
npm run dev
```

This will start the development server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the interactive feature showcase.

---

For any questions or suggestions, feel free to open an issue or contact the maintainer.
