# Elf Name Generator 🎄

A fun, festive holiday app that generates whimsical elf names based on the first letter of your first name and your birth month. Built for a holiday team activity at work.

**Live Site:** [https://elfname.johnmunn.tech](https://elfname.johnmunn.tech)

## The Story

This was built for a holiday thing at work—a simple, playful tool to help the team generate their "elf names" during the Christmas season. It's a small project that brings a bit of joy and team bonding, showing that sometimes the best tools are the simple ones that make people smile.

Used by the team to generate Elf names at Christmas, this app demonstrates the kind of small, thoughtful touches that help build team morale and create memorable moments.

## Features

- 🎅 **Generate your unique elf name** based on your first name's initial and birth month
- 🎨 **Festive holiday design** with animated snowflakes, soft glow effects, and a warm, hand-crafted aesthetic
- 📱 **Fully responsive** design that works beautifully on all devices
- 🐦 **Social sharing** - Share your elf name on Twitter and LinkedIn
- ♿ **Accessible** - Built with semantic HTML and ARIA labels
- 🔒 **Secure** - HTTPS enforced with automatic redirects

## Design Highlights

- Beautiful holiday-themed UI with red card on green argyle background
- Animated snowflakes drifting inside the card
- Soft vignette glow effect for depth
- Noise texture for a warm, hand-crafted feel
- Holiday fonts (Mountains of Christmas) for headings
- Candy cane underline on the main title
- Gradient buttons with sparkle icons

## Tech Stack

- **React 18.2** - Modern React with hooks and functional components
- **Create React App 5.0.1** - Build tooling and development server
- **Modern React patterns** - Controlled components, pure helper functions
- **CSS3** - Custom styling with animations and gradients
- **Netlify** - Hosting and deployment with automatic HTTPS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Deployment

This app is deployed on **Netlify** with:
- Custom domain: `elfname.johnmunn.tech`
- Automatic HTTPS with Let's Encrypt
- HTTP to HTTPS redirects via `_redirects` and `netlify.toml`
- Automatic deployments on git push

## Project Structure

```
elf-name/
├── public/
│   ├── _redirects          # Netlify redirect rules
│   ├── favicon.svg          # Custom holiday-themed favicon
│   ├── index.html           # Main HTML with SEO meta tags
│   └── manifest.json        # PWA manifest
├── src/
│   ├── App.js               # Main app component
│   ├── App.css              # Styling with animations
│   ├── elfNameUtils.js      # Pure helper function for name generation
│   └── index.js             # React 18 entry point
├── netlify.toml             # Netlify configuration
└── package.json             # Dependencies and scripts
```

## Future Improvements

If you ever decide to update this or add it to your Workbench as a "legacy toy":

- Consider migrating to Vite for faster builds and development
- Add copy-to-clipboard functionality for elf names
- Add more name variations or seasonal themes
- Add animations for name generation reveal
- Consider adding a "favorites" feature to save generated names

---

Built with ❄️ for the holidays
