class ClasseHeroi {

    ataque=" ";

    constructor (nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
      
    }   

     tipoAtaque() {
                 
         if(this.tipo === "mago") {
           return this.ataque ="magia";
         } else if (this.tipo === "guerreiro" ) {
            return this.ataque = "espada";
         } else if (this.tipo === "monge") {
             return this.ataque = "artes marciais";
         } else  {
            return this.ataque = "suriken";
         }
        
    }
}

const novoHeroi = new ClasseHeroi("Marcus",5,"guerreiro");
ClasseHeroi.tipoAtaque
 novoAtaque = novoHeroi.tipoAtaque();
console.log(`O ${novoHeroi.tipo} atacou usando ${novoAtaque} `)