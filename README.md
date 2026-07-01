# macOS Portfolio

An interactive portfolio website that recreates the experience of macOS desktop environment in your browser.

![macOS Portfolio](public/macbook.png)

## Features

- **Authentic macOS Experience**: Fully interactive desktop environment mimicking macOS interface
- **Boot Animation**: Realistic macOS boot screen on first load
- **Draggable Windows**: All application windows can be dragged and repositioned
- **Multiple Applications**:
  - **Finder**: Browse through project files and folders
  - **Safari**: Web browser showcasing projects and links
  - **Terminal**: Interactive terminal experience
  - **Resume**: View professional resume/CV
  - **Photos**: Gallery showcasing images
  - **Text Editor**: View and display text content
  - **Contact**: Get in touch form or information
- **Dock**: Functional application launcher with hover effects
- **Menu Bar**: macOS-style navigation bar with system controls
- **Smooth Animations**: Powered by GSAP for fluid interactions

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server (using Rolldown for faster builds)
- **Tailwind CSS 4** - Styling
- **GSAP** - Animations and draggable interactions
- **Zustand** - State management
- **Lucide React** - Icon library
- **Day.js** - Date/time utilities

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xiaopeng-ye/macos-portfolio.git
cd macos-portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## Project Structure

```
macos-portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── BootScreen.tsx
│   │   ├── Dock.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── windows/         # Application window components
│   │   ├── Finder.tsx
│   │   ├── Safari.tsx
│   │   ├── Terminal.tsx
│   │   └── ...
│   ├── store/           # Zustand state management
│   ├── constants/       # App constants and configurations
│   ├── hoc/             # Higher-order components
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
│   ├── icons/           # App and system icons
│   ├── images/          # Wallpapers and images
│   └── files/           # Document files
└── dist/                # Production build output
```

## Customization

### Adding Your Own Content

1. **Update Resume**: Modify the Resume component in `src/windows/Resume.tsx`
2. **Add Projects**: Update the Finder or Safari components with your projects
3. **Change Wallpaper**: Replace images in `public/images/`
4. **Customize Icons**: Update icons in `public/icons/`
5. **Modify Contact Info**: Edit the Contact component in `src/windows/Contact.tsx`

### Styling

This project uses Tailwind CSS 4. Global styles are in `src/index.css`. Component-specific styles use Tailwind utility classes.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

- Optimized with Vite's Rolldown bundler for faster builds
- Lazy loading of window components
- GSAP for hardware-accelerated animations
- React 19's latest performance improvements

## License

MIT License - feel free to use this project for your own portfolio!

## Acknowledgments

- Inspired by macOS design
- Built with modern web technologies
- Icons from Lucide React

---

Made with ❤️ using React and TypeScript
