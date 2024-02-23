
class node{
    constructor(value,next = null){
        this.value = value;
        this.next = next
    }
}


class todos{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(task){
        const newtodos = new node(task)

        if(!this.head){
            this.head = newtodos
        }else{
            this.tail.next = newtodos

        }
        this.tail = newtodos
    }
    print(){
        let node = this.head;
        while(node !=null){
            console.log(`Title: ${node.value.tittle}\nDescription: ${node.value.description}\nNext nodo: ${node.next?.value.tittle || null} descripcion: ${node.next?.value.description || null}` );
            node = node.next
        }
    }


}

class task{
    constructor(tittle,description){
        this.tittle = tittle
        this.description = description
    }
}
let task1 = new task("task 1", "Descripcion para la tarea 1")
let task2 = new task("task 2", "Descripcion para la tarea 2")
let task3 = new task("task 3","Descripcion para la tarea 3")

let todo1= new todos()
todo1.append(task1)
todo1.append(task2)
todo1.append(task3)


todo1.print()