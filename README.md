# Movie Database App

<div align="center">

![Movie Database](https://img.shields.io/badge/Movie-Database-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-10.7.1-FFCA28?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, feature-rich movie discovery platform built with React, Firebase, and the OMDb API**

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Authentication](#-authentication)
- [Deployment](#-deployment)
- ***

## Overview

Movie Database is a full-featured web application that allows users to search for movies, view detailed information, and save their favorites. Built with modern web technologies, it offers a seamless experience across all devices with real-time data synchronization and secure authentication.

## Features

### Core Features

- **Movie Search**
  - Real-time search powered by OMDb API
  - Instant results as you type
  - Search across 1M+ movies

- **Movie Details**
  - Comprehensive movie information
  - Release dates and runtime
  - Genre classifications

- **Personal Favorites**
  - Save movies to your personal collection
  - Quick add/remove with star icon
  - Dedicated favorites page

- **User Authentication**
  - Google Sign-In integration
  - Secure Firebase Authentication
  - Protected routes
  - User profile display
  - Session persistence

### Additional Features

- **Real-time Data Sync**
  - Favorites synced via Firestore
  - Instant updates across devices
  - Offline data persistence

- **Modern UI/UX**
  - Clean, intuitive interface
  - Error handling with user feedback

- **404 Error Handling**

- Custom 404 page
- Easy navigation back to safety
- User-friendly error messages

---

## Tech Stack

### Frontend

- **React 19.2.0** - Latest React with concurrent features
- **Vite 7.2.4** - Next-generation frontend tooling
- **React Router v6** - Declarative routing for React
- **CSS** - Styling
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Axios 1.6.0** - Promise-based HTTP client

### Backend & Services

- **Firebase Authentication** - Google OAuth integration
- **Firebase Firestore** - NoSQL cloud database for favorites
- **OMDb API** - Movie data and information

### UI Components

- **FontAwesome 5.15.4** - Icon library

---

## Screenshots

### Home Page - Search Movies

![Home Page](/src/screenshots/homepage.png)

### Movie Details Page

![Details](/src/screenshots/moviedetails.png)

### Favorites Page

![Favorites](./src/screenshots/favorites.png)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/ronohappdev/movie-db
cd movie-db
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add your API keys (see [Configuration](#-configuration) section):

```env
# OMDb API Key
VITE_OMDB_API_KEY=your_omdb_api_key_here

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Step 4: Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## Configuration

### Getting OMDb API Key

1. Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Select the free tier (1,000 requests/day)
3. Enter your email
4. Verify your email
5. Copy your API key
6. Add to `.env` file

### Setting Up Firebase

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project"
   - Follow the setup wizard

2. **Enable Authentication**
   - Navigate to Authentication > Sign-in method
   - Enable Google provider
   - Add your domain to authorized domains

3. **Enable Firestore**
   - Navigate to Firestore Database
   - Create database in test mode
   - Choose your region

4. **Get Firebase Config**
   - Go to Project Settings > General
   - Scroll to "Your apps"
   - Click the web icon (`</>`)
   - Copy the config object
   - Add values to `.env` file

5. **Set Firestore Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/favorites/{favoriteId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

---

## Usage

### Searching for Movies

1. Navigate to the home page
2. Type a movie name in the search bar
3. Results appear instantly as you type
4. Click on any movie to view details

### Adding to Favorites

1. Click the star icon (☆) on any movie card
2. The star fills (⭐) indicating it's added
3. Movie is saved to your personal favorites in the cloud
4. Access favorites from the "Favorites" page

### Viewing Movie Details

1. Click on any movie card
2. View comprehensive information including:
   - Full plot summary
   - Cast and crew
   - Ratings from multiple sources
   - Release date and runtime
   - Genres and languages

### Managing Your Account

1. Click "Login" to sign in with Google
2. Your profile picture appears in the header
3. Access your favorites from any device
4. Click "Logout" to sign out

---

## Project Structure

```
movie-search/
├── public/
│   └── vite.svg                    # App favicon
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── Card.jsx               # Movie card component
│   │   ├── Header.jsx             # Navigation header
│   │   ├── Input.jsx              # Search input
│   │   ├── Layout.jsx             # Page layout wrapper
│   │   └── PrivateRoute.jsx       # Route protection HOC
│   ├── config/                     # Configuration files
│   │   ├── firebase.js            # Firebase setup
│   │   └── Router.jsx             # Route definitions
│   ├── context/                    # Context providers
│   │   ├── AuthContext.jsx        # Authentication state
│   │   └── MovieContext.jsx       # Movie data state
│   ├── pages/                      # Page components
│   │   ├── About.jsx              # About page
│   │   ├── Contact.jsx            # Contact form
│   │   ├── Detail.jsx             # Movie details
│   │   ├── Favorite.jsx           # Favorites list
│   │   ├── Home.jsx               # Search page
│   │   ├── Login.jsx              # Login page
│   │   └── NotFound.jsx           # 404 page
│   ├── styles/                     # CSS stylesheets
│   │   ├── Card.css
│   │   ├── Detail.css
│   │   ├── Favorite.css
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── Input.css
│   │   ├── Layout.css
│   │   ├── Login.css
│   │   └── NotFound.css
│   ├── screenshots
│   │   ├── favorites.png
│   │   ├── homepage.png
│   │   ├── moviedetails.png
│   ├── utils/                      # Utility files
│   │   └── no-image-available.png # Placeholder image
│   ├── App.jsx                     # Root component
│   ├── App.css                     # App styles
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── .env                            # Environment variables (gitignored)
├── .gitignore                      # Git ignore rules
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML entry point
├── package.json                    # Dependencies
├── postcss.config.js               # PostCSS config
├── tailwind.config.js              # Tailwind config
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

---

## API Integration

### OMDb API

The app uses the [OMDb API](http://www.omdbapi.com/) for movie data.

**Endpoints Used:**

1. **Search Movies**

   ```
   GET https://www.omdbapi.com/?apikey={key}&s={search_term}
   ```

   Returns list of movies matching search term

2. **Get Movie Details**
   ```
   GET https://www.omdbapi.com/?apikey={key}&i={imdb_id}
   ```
   Returns detailed information for specific movie

**Rate Limits:**

- Free tier: 1,000 requests/day
- If you need more, upgrade to paid tier

---

## Authentication

### Google OAuth Flow

```
1. User clicks "Sign in with Google"
   ↓
2. Firebase opens Google OAuth popup
   ↓
3. User selects Google account
   ↓
4. Google returns user credentials
   ↓
5. Firebase verifies and creates session
   ↓
6. User data stored in AuthContext
   ↓
7. User redirected to protected routes
```

### Protected Routes

The following routes require authentication:

- `/` - Home (search)
- `/movies/:id` - Movie details
- `/favorites` - Favorites list
- `/about` - About page
- `/contact` - Contact page

Public routes:

- `/login` - Login page
- `*` - 404 page

---

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy**

   ```bash
   vercel --prod
   ```

3. **Add Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add all your `VITE_*` variables

---

**Project Link:** [https://github.com/ronohappdev/movie-db](https://github.com/ronohappdev/movie-db)

**Live Demo:** [ https://movie-db-two-drab.vercel.app/login](https://movie-db-two-drab.vercel.app/)

---

<div align="center">

**Made for for movie enthusiasts**

[Back to Top](#-movie-db)

</div>
