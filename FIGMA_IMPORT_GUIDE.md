# Figma Import Guide - Chinese Learning App

## Method 1: Using html.to.design Plugin

1. Install "html.to.design" plugin in Figma
2. Copy the live app URL or use the development server
3. Run the plugin and paste the URL
4. The plugin will convert the app to Figma layers

## Method 2: Manual Recreation

### Setup Figma Document

- Create new Figma file
- Set up 375x812px frames (iPhone dimensions)
- Import color palette:
  - Primary Blue: #2563eb
  - Light Gray: #e6e6e6
  - Light Green: #dcfce7
  - Light Red: #fecaca
  - Yellow: #fbbf24
  - Dark Gray: #4b5563

### Screen Frames to Create:

#### 1. Splash Screen (375x812)

- Background: #ffffff
- Title: "Learning Assistant" (36px, bold, center)
- Button: "Start Learning 📱" (#2563eb background, white text)

#### 2. Home Screen (375x812)

- Header with menu icon and profile circle
- Two content sections with navigation buttons
- Bottom navigation bar (fixed)

#### 3. Learn Screen (375x812)

- Header with back button and progress (1/10)
- Large vocabulary card (gray background)
- Play button (circular)
- Two action buttons (green/red)

#### 4. Review Screen (375x812)

- Filter dropdown at top
- Scrollable vocabulary list

#### 5. Progress Screen (375x812)

- Time filter buttons
- Chart placeholder
- Achievement badge
- Settings button

### Typography Styles to Create:

- H1: 36px, Bold (Splash title)
- H2: 18px, Medium (Section titles)
- Body: 16px, Regular (Navigation)
- Small: 14px, Medium (Buttons)
- Caption: 12px, Regular (Small text)

### Component Library:

- Buttons (Primary, Secondary, Icon)
- Navigation bars
- Cards
- Input fields
- Icons (from Lucide or similar)

## Method 3: Export from Browser

1. Use browser extensions like "Full Page Screen Capture"
2. Capture each screen in high resolution
3. Import to Figma as reference images
4. Trace over with native Figma elements

## Assets Needed:

- Lucide React icons (Arrow Left, Play, Settings, Menu, User)
- Mobile frame template (375x812)
- Color swatches
- Typography scale
