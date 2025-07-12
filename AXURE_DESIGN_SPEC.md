# Chinese Learning App - Axure Design Specification

## Color Palette

- Primary Blue: #2563eb (app-blue)
- Light Gray: #e6e6e6 (app-lightgray)
- Light Green: #dcfce7 (app-lightgreen)
- Light Red: #fecaca (app-lightred)
- Yellow: #fbbf24 (app-yellow)
- Dark Gray: #4b5563 (app-darkgray)
- Background: #ffffff
- Text: #262626

## Screen Dimensions

- Mobile: 375x812px
- Max width container: 384px centered

## Screens

### 1. Splash Screen

- **Title**: "Learning Assistant" (text-4xl, font-bold, center)
- **Button**: "Start Learning 📱" (blue background, white text, rounded-lg)
- **Layout**: Centered vertically and horizontally
- **Navigation**: Button leads to Home screen

### 2. Home Screen

- **Header**:
  - Left: Menu icon (hamburger)
  - Right: Profile circle (gray background, user icon)
- **Content**:
  - "📚 Daily Vocabulary" section with "Learn →" button
  - "🔄 Review Reminder" section with "Review →" button
- **Bottom Navigation**:
  - "📖 Learn" | "🔄 Review" | "📊 Progress"
  - Fixed position, gray background

### 3. Learn Screen

- **Header**:
  - Left: "← Back" button
  - Right: Progress "1/10"
- **Content**:
  - Large vocabulary card (gray background, rounded)
  - Play button (circular, gray)
  - "✅ I Know" button (green background)
  - "❌ Don't Know" button (red background)
- **Footer**: "← Swipe to switch cards →"

### 4. Review Screen

- **Header**: "Error Vocabulary 🔽" filter
- **Content**: List of vocabulary words with pronunciations
- **Layout**: Scrollable list format

### 5. Progress Screen

- **Header**: Time filter buttons (Week/Month/Year)
- **Content**:
  - Chart placeholder area
  - Achievement badges grid
  - "Set Goals" button with settings icon
- **Layout**: Vertical sections

## Typography

- Large headings: text-4xl (36px)
- Section titles: text-lg (18px)
- Body text: text-base (16px)
- Small text: text-sm (14px)
- Button text: text-sm (14px), font-medium

## Spacing

- Padding: 20px (p-5)
- Margins: 32px (mt-8), 64px (mt-16)
- Gaps: 8px, 12px, 16px, 32px
- Border radius: 6px (rounded-lg), 8px (rounded-lg)

## Interactive Elements

- All buttons have hover states
- Navigation between screens
- Progress tracking in Learn mode
- Filter functionality in Review mode

## Icons (Lucide React equivalents)

- Menu: Hamburger lines
- User: Circle with user silhouette
- Play: Triangle pointing right
- Arrow Left: Left-pointing arrow
- Settings: Gear icon
