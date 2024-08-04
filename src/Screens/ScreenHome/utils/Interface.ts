export interface Destination {
    id: number;
    name: string;
    country: string;
    continent: string;
    description: string;
    image: string;
    population: string;
    currency: string;
    language: string;
    best_time_to_visit: string;
    top_attractions: string[];
    local_dishes: string[];
    activities: string[];
  }
  
  export interface HomeState {
    destinations: Destination[];
    loading: boolean;
    error: string | null;
  }