class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ){}

  gritar(){
    console.log(`¡NO QUIERO GRITAR`);
  }

  hablar(){
    console.log(`NO QUIERO HABLAR`);
  }
}
const MyDecorator = () =>{
  return (target: Function) => {
    //console.log(target);
    return NewPokemon;
  }
}

@MyDecorator()

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ){}

  gritar(){
    console.log(`¡${this.name.toUpperCase()}!`);
  }

  hablar(){
    console.log(`${this.name},${this.name}!`);
  }
}

export const charmander = new Pokemon(4,'Charmander');

charmander.gritar();
charmander.hablar();