class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        this.horaLlegada = new Date();
    }
}

class ColaCajeroAutomatico {
    constructor() {
        this.cola = [];
    }

    enqueue(nombre) {
        const persona = new Persona(nombre);
        this.cola.push(persona);
        console.log(`${persona.nombre} llego a las ${persona.horaLlegada.toLocaleTimeString()} al cajero.`);
    }

    dequeue() {
       return this.cola.shift()
    }

    peek() {
        if (this.cola.length === 0) {
            console.log("La cola está vacía.");
        } else {
            const personaActual = this.cola[0];
            console.log(`${personaActual.nombre} está próximo en la cola.`);
            return personaActual;
        }
    }

    size() {
        console.log(`Número de personas en la cola: ${this.cola.length}`);
        return this.cola.length;
    }

    print() {
        return this.cola
    }
}


const colaCajero = new ColaCajeroAutomatico();

colaCajero.enqueue("Carlos andres alzate");
colaCajero.enqueue("Edgar muñoz");
colaCajero.enqueue("Juan david sanchez");
colaCajero.enqueue("Maria isabel");
colaCajero.enqueue("Daniel salinas ");


colaCajero.print();

colaCajero.dequeue();
colaCajero.print();

colaCajero.peek();
colaCajero.size();
