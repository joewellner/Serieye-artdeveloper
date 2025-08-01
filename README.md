# ARTWORK - Enhanced Minimalist Art Gallery

A poetic and interactive minimalist art gallery with advanced navigation, realistic suspension effects, and immersive user experience.

## ✨ New Features

- **🎨 Custom Brush Cursor**: Interactive paintbrush cursor throughout the site
- **🔄 Horizontal Navigation**: Smooth transitions between 3 gallery sections
- **🎪 Enhanced Suspension**: Realistic cord attachments with varied lengths
- **🌊 Improved Floating Effects**: More dynamic swaying and balancing animations
- **⌨️ Keyboard Navigation**: Arrow keys to navigate between sections
- **📱 Touch Support**: Swipe gestures for mobile navigation
- **🖼️ Featured Artworks**: Larger highlighted pieces in each section

## Gallery Sections

### 1. Contemporary Collection
Modern abstract and minimalist artworks with clean lines and contemporary aesthetics.

### 2. Modern Masters
A curated selection featuring famous masterpieces and renowned artistic works.

### 3. Classic Collection
Renaissance and classical art pieces showcasing timeless artistic heritage.

## Features

- **Minimalist Design**: Clean beige background with elegant typography
- **10 Artworks**: Distributed across 3 themed sections
- **Realistic Suspension**: Artworks hanging from thin black cords with attachment points
- **Advanced Animations**: Enhanced floating, swaying, and balancing effects
- **Interactive Navigation**: Smooth section transitions with visual indicators
- **Enhanced Hover Effects**: Dynamic rotation, scaling, and shadow effects
- **Detailed Popups**: Click any artwork to view comprehensive information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: Keyboard navigation and touch support

## Design Elements

- **Header**: "ARTWORK" in elegant serif font (Playfair Display) on the left, "CONTACT" in clean sans-serif (Inter) on the right
- **Navigation**: Subtle dot indicators at the bottom for section switching
- **Typography**: Professional font pairing with section titles and artwork information
- **Color Palette**: Soft beige background (#f5f1eb) with dark text (#2c2c2c) and bronze accents (#8b7355)
- **Custom Cursor**: Paintbrush cursor for artistic immersion
- **Animations**: Multiple layered animations including floating, cord swaying, mouse parallax, and section transitions

## File Structure

```
art-gallery/
├── index.html          # Enhanced HTML structure with sections
├── styles.css          # Advanced CSS with navigation and animations
├── script.js           # Enhanced JavaScript with navigation logic
├── assets/
│   └── images/         # Artwork images and brush cursor
│       ├── brush-cursor.png    # Custom paintbrush cursor
│       ├── artwork1.jpg        # Contemporary Collection
│       ├── artwork2.jpg
│       ├── artwork3.jpg
│       ├── artwork4.jpg
│       ├── artwork5.jpg        # Modern Masters
│       ├── artwork6.jpg
│       ├── artwork7.jpg
│       ├── artwork8.jpg
│       ├── artwork9.jpg        # Classic Collection
│       └── artwork10.jpg
└── README.md           # Enhanced documentation
```

## How to Use

1. Open `index.html` in any modern web browser
2. Observe the enhanced floating animations with realistic cord suspension
3. Navigate between sections using:
   - **Mouse**: Click navigation dots at the bottom
   - **Keyboard**: Use left/right arrow keys
   - **Touch**: Swipe left/right on mobile devices
4. Hover over artworks to see enhanced tilt and swing effects
5. Click on any artwork to open detailed information popup
6. Close popups by clicking the X button, clicking outside, or pressing ESC
7. Experience the custom paintbrush cursor throughout the site

## Technical Implementation

- **Pure HTML/CSS/JavaScript**: No external frameworks required
- **Advanced CSS Animations**: Enhanced keyframe animations for realistic movement
- **JavaScript Navigation**: Smooth section transitions with state management
- **Touch Events**: Mobile-friendly swipe navigation
- **Keyboard Events**: Arrow key navigation and ESC key handling
- **Custom Cursor**: CSS cursor property with paintbrush image
- **Performance Optimized**: Efficient animations and minimal resource usage
- **Responsive Design**: Media queries for all device sizes

## Navigation Controls

- **Mouse Navigation**: Click dots at bottom of screen
- **Keyboard Navigation**: 
  - `←` Left Arrow: Previous section
  - `→` Right Arrow: Next section
  - `ESC`: Close popup
- **Touch Navigation**: Swipe left/right to change sections
- **Auto-Navigation**: Optional automatic section switching (disabled by default)

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

To customize the gallery:

1. **Add New Sections**: Extend the HTML structure and update navigation
2. **Replace Artworks**: Add new images and update the `artworkData` object in `script.js`
3. **Adjust Animations**: Modify animation durations and effects in `styles.css`
4. **Change Colors**: Update the color palette variables in the CSS
5. **Modify Cursor**: Replace `brush-cursor.png` with your custom cursor image
6. **Add More Navigation**: Extend the dot navigation system

## Performance Features

- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Efficient image loading and rendering
- **Smooth Transitions**: 60fps animations with cubic-bezier easing
- **Memory Management**: Proper event listener cleanup
- **Mobile Optimization**: Touch-friendly interactions and responsive design

## Credits

- Fonts: Google Fonts (Playfair Display, Inter)
- Artwork Images: Curated contemporary, modern, and classical art pieces
- Brush Cursor: Custom paintbrush icon for artistic immersion
- Design Inspiration: Modern minimalist gallery aesthetics with enhanced interactivity

