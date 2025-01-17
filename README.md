# Rolling Glory Tunggal - React.js Project
Demosite : https://6789d018390c82a3ec5bf8bf--gleaming-tulumba-9f4256.netlify.app/

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [Building and Deploying](#building-and-deploying)
   - [Deploying to Netlify](#deploying-to-netlify)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)
7. [SEO Implementation](#seo-implementation)
8. [Contact](#contact)

## Introduction

This is a React.js project named "Rolling Glory Tunggal". It includes several components, pages, and services, along with Tailwind CSS for styling, Axios for HTTP requests, and other libraries like React-Toastify and React-Spinners.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd rolling_glory_tunggal
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Project

To run the project locally, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser. The application will be running at `http://localhost:3000`.

## Building and Deploying

To create a production build of the project, use:

```bash
npm run build
```

This command will generate an optimized build in the `build/` directory.

### Deploying to Netlify

To deploy this project to Netlify:

1. Create a new site on Netlify.
2. Connect your GitHub repository to Netlify.
3. Choose the branch to deploy (usually `main` or `master`).
4. Set the build command to `npm run build`.
5. Set the publish directory to `build/`.
6. Deploy the site.

After these steps, Netlify will build and deploy your project automatically.

### Adding PWA to React

1. Enable Service Worker

- Ensure serviceWorkerRegistration.register() is called in src/index.js:
- import \* as serviceWorkerRegistration from './serviceWorkerRegistration';
- serviceWorkerRegistration.register();

2. Add Manifest File

- Update public/manifest.json

3. Add PWA Install Prompt (Optional)
4. Build and Deploy

- Run npm run build and deploy to an HTTPS server.

5. Test with Lighthouse

- Use Chrome DevTools Lighthouse to verify your app meets PWA criteria.

## Project Structure

```
rolling_glory_tunggal/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── common/
│   │   └── ...
│   ├── component/
│   │   ├── Counter.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── ProductBadge.js
│   │   ├── ProductList.js
│   │   ├── Select.js
│   │   ├── StarRating.js
│   │   ├── StockStatus.js
│   │   ├── Wishlist.js
│   ├── pages/
│   │   ├── Detail.js
│   │   ├── Home.js
│   ├── services/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── global.css
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env
├── .gitignore
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making requests.
- **React-Toastify**: A library for displaying toast notifications.
- **React-Spinners**: A library for loading spinner components.

## SEO Implementation

SEO is implemented in the `public/index.html` file by adding meta tags. Here are some examples:

```html
<meta
  name="description"
  content="Rolling Glory Tunggal - The best products for you."
/>
<meta name="keywords" content="React, Tailwind CSS, Axios, Spinner, Toastify" />
<meta name="author" content="Your Name" />
```

These meta tags help improve the visibility of your website on search engines.

## Contact

For any inquiries or feedback, please reach out to us at [rpltunggal@gmail.com].
