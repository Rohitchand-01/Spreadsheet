# 📊 Spreadsheet UI – React Prototype

This project replicates a static spreadsheet UI using **React** and **Tailwind CSS**, as per a Figma design. It showcases job request tracking with visual grouping, colored status tags, and a scrollable tabular layout.

## ✅ Features

- Pixel-perfect spreadsheet layout
- Section headers like **Financial Overview**, **ABC**, etc.
- Colored status indicators (e.g. In-process, Complete)
- TypeScript support with strongly typed styles
- Icons via `react-icons`
- Fully responsive scrollable layout with consistent row styling

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rohitchand-01/Spreadsheet.git
   cd spreadsheet
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

> Ensure you have the correct `Shape.png` image inside `src/assets/`.

---

## 📌 File Structure

```
src/
├── assets/
│   └── Shape.png
├── components/
│   └── Excel.tsx
│   └── Header.tsx
└── main.tsx / App.tsx
```

---

## ⚠️ Trade-offs

- **No dynamic data**: This UI is static and ideal for prototyping. It does not support editing or fetching data from an API.
- **Fixed column widths**: Adjusted for screen fit; may need tweaking for responsiveness.
- **Scrollable UI**: The table does not wrap or shrink; it scrolls horizontally on small screens using `overflow-x`.
- **No accessibility enhancements** (e.g., ARIA labels) added yet.

---

## 📦 Tech Stack

- React + TypeScript
- Tailwind CSS
- React Icons
