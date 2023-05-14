import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapiResponse.interface";

export  class Pokemon {			

  get imageurl():string {
    return `https://transformer.com/${ this.id }.jpg`
  }

  constructor(
  public readonly id: number, 
  public name: string,
  ){} 

  grito () {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  habla (){
    console.log(`${this.name},${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);
    return data.moves;

  }
}

export const Charmander = new Pokemon(17,'Prime')

//console.log(Charmander);
//Charmander.grito();
//Charmander.habla();
//console.log(Charmander.getMoves());
Charmander.getMoves();