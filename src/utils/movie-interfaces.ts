export interface Movie {
    id: number;
    original_language: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    vote_average: number;
  }
  
export interface ApiResponse {
    results:Movie[];
    total_pages: number;
    Response: string;
    Error?: string;
  }

export interface SearchProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
  }

export interface PaginationProps{
    currentPage: number;
    prevPage: () => void;
    nextPage: () => void;
    totalPages: number;
  }

export interface MovieCardProps {
    movie: {
        title: string;
        vote_average: number;
        poster_path: string | null;
        release_date: string;
        original_language: string;
    }
}