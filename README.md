<img src="./public/hero-tumbnail.PNG" alt="Hero Thumbnail" width="100%" height="150" style="border-radius: 8px;
object-fit: cover;
margin: 0 auto;" />

# Movie Gallery
A modern React + Vite web app to search, browse, and discover trending movies. The app uses the TMDB API for movie data and Appwrite for tracking trending searches. Styled with Tailwind CSS for a clean, responsive UI.

## Features

- **Search Movies:** Instantly search through thousands of movies using the TMDB API.
- **Trending Movies:** Displays the top trending movies based on user searches, tracked via Appwrite.
- **Movie Details:** View movie posters, ratings, release year, and language.
- **Pagination:** Easily browse through multiple pages of results.
- **Responsive UI:** Clean, modern design with Tailwind CSS.

## Project Structure

- `src/components/` – UI components (MovieCard, Search, Pagination, Spinner)
- `src/utils/` – TypeScript interfaces for movie data
- `src/appwrite.ts` – Appwrite integration for trending movies
- `src/assets/` – Static assets (e.g., images, SVGs)
- `src/App.tsx` – Main app logic and layout

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/movie-gallery.git
cd movie-gallery
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
VITE_API_TMDB_URL=https://api.themoviedb.org/3
VITE_TMDB_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

You can get a TMDB API key by signing up at [themoviedb.org](https://www.themoviedb.org/).  
Appwrite credentials are required for trending search tracking.

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or as indicated in your terminal).

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/) (for trending search tracking)
- [TMDB API](https://www.themoviedb.org/documentation/api)