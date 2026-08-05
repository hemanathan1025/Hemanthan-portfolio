# Hemanthan R S Portfolio

Modern responsive personal portfolio built with React JS, Vite, and CSS.

## Features

- React functional components
- Separate CSS files for each component
- Responsive navbar with smooth scrolling
- Hero, About, Skills, Projects, Education, Certification, Contact, and Footer sections
- Dark mode toggle with saved preference
- CSS typing animation, reveal animation, hover effects, and gradient backgrounds
- Social/contact icons using inline SVG components
- Download resume button

## Project Structure

```text
hemanthan-portfolio/
  public/
    Hemanthan-RS-Resume.txt
  src/
    components/
      About/
      Certification/
      Contact/
      Education/
      Footer/
      Hero/
      Icon/
      Navbar/
      Projects/
      SectionHeader/
      Skills/
    App.jsx
    App.css
    data.js
    index.css
    main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output will be generated in the `dist` folder.

## Deploy To GitHub Pages

This repository includes a GitHub Actions workflow that builds Vite and publishes the `dist` folder.

1. Push the project to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Visit `https://hemanathan1025.github.io/Hemanthan-portfolio/`.

## Deploy To Vercel

1. Push the project to GitHub.
2. Open Vercel and choose `Add New Project`.
3. Import the GitHub repository.
4. Keep the framework preset as `Vite`.
5. Use these settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click `Deploy`.

## Deploy To Netlify

1. Push the project to GitHub.
2. Open Netlify and choose `Add new site`.
3. Import the GitHub repository.
4. Use these settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click `Deploy site`.

You can also deploy manually by running `npm run build` and dragging the `dist` folder into Netlify's manual deploy area.
