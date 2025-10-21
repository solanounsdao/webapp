# Logo Background Removal Instructions

## Option 1: Using Online Tools (Easiest)
1. Go to **remove.bg** (https://www.remove.bg/)
2. Upload your `logo.png` file
3. The AI will automatically remove the background
4. Download the result as `logo-transparent.png`
5. Replace the current `logo.png` with the transparent version

## Option 2: Using GIMP (Free Software)
1. Download and install GIMP (https://www.gimp.org/)
2. Open `logo.png` in GIMP
3. Right-click on the layer and select "Add Alpha Channel"
4. Use the "Fuzzy Select Tool" (Magic Wand) to select the background
5. Press Delete to remove the background
6. Export as PNG with transparency

## Option 3: Using Photoshop
1. Open `logo.png` in Photoshop
2. Use the "Magic Wand Tool" or "Background Eraser Tool"
3. Select and delete the background
4. Save as PNG with transparency

## Option 4: Using Canva (Online)
1. Go to Canva.com
2. Upload your logo
3. Use the "Background Remover" feature (Pro feature)
4. Download the transparent version

## Current CSS Workaround
The current implementation uses CSS blend modes to minimize background visibility:
- `mix-blend-mode: multiply` for light mode
- `mix-blend-mode: screen` for dark mode
- Brightness and contrast adjustments

## After Creating Transparent Version
1. Replace `public/logo.png` with your transparent version
2. Remove the CSS classes `logo-transparent logo-blend` from Header.tsx
3. Keep just: `className="w-8 h-8 object-contain"`