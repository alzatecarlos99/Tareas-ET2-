class Libro{
    constructor(nombre,ISBN,autor,editorial){
        this.nombre= nombre;
        this.ISBN = ISBN
        this.autor = autor
        this.editorial = editorial
    }
}




class Pila{
    constructor(){
        this.pila= {}
        this.count = 0;
    }
    push(Libro){
       this.pila[this.count]= Libro;
       this.count ++;
       return this.pila
    }
    pop(){
        this.count--;
        const libro = this.pila[this.count]
        delete this.pila[this.count];
        return libro 
    }
    peek(){
        return this.pila[this.count-1];
    }

    size (){
        return this.CountQueuingStrategy;
     }
     print(){
        console.log(this.pila)
     }

}

const Libro1= new Libro("habitos atomicos", "asd123df", " Leonardo"," Altea")

const Libro2= new Libro("Padre rico", "qweui123nk4", " manuel"," Arlequin")

const pilaDeLibros= new Pila();
pilaDeLibros.push(Libro1)
pilaDeLibros.push(Libro2)

pilaDeLibros.print()
pilaDeLibros.push("Hola")