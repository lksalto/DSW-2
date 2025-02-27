export interface Disco {
    id: number
    nome: string
    artista: string
    genero: string
    preco: string
    imagem: string
  }
  
  export interface CartItem extends Disco {
    quantidade: number
  }  