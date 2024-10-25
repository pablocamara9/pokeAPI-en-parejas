export interface Ability {
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number;
  }
  
 export interface Cries {
    latest: string;
    legacy: string;
  }
  
  export interface PokemonForm {
    name: string;
    url: string;
  }

  export interface Type {
    slot: number;
    name: string;
    url: string;
  }
  
  export interface Pokemon {
   name: string;
   url  : string;
  }
  export interface PokemonResponse {
    count: number;
    results: Pokemon[];
    
  }
