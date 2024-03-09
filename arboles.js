class Node {
    constructor(value) {
      this.value = value;
      this.hijo = [];
    }
    isLeaf() {
      if (this.hijo.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  class arbol {
    constructor() {
      this.root = null;
    }
  
    search(value, node = this.root) {
      if (!this.root) {
        return null;
      }
  
      if (this.root.value === value) {
        return this.root;
      } else {
        const hijo = node.hijo;
  
        const hijos = hijo.find((item) => item.value === value);
  
        if (hijos) {
          return hijos;
        } else {
          let hijode;
          hijo.forEach((item) => {
            if (hijode) {
              return;
            }
  
            hijode = this.search(value, item);
          });
  
          return hasChild;
        }
      }
    }
  
    insert(value, parent) {
      const newNode = new Node(value);
  
      if (!parent) {
        if (!this.root) {
          this.root = newNode;
        } else {
          return null;
        }
      } else {
        const parentNode = this.search(parent);
        parentNode.hijo.push(newNode);
      }
    }
  
    preOrder(node = this.root) {
      if (!node) {
        return;
      }
      console.log(node.value, node.children);
  
      node.hijo.forEach((element) => {
        this.preOrder(element);
      });
    }
  
    postOrder(node = this.root) {
      if (!node) {
        return;
      }
  
      node.hijo.forEach((element) => {
        this.postOrder(element);
      });
      console.log(node.value)
    }
  
    inOrder(node = this.root) {
      if (!node) {
        return;
      }
  
      if (node.hijo.length === 0) {
        console.log(node.value);
      } else {
        this.inOrder(node.hijo[0]);
        console.log(node.value);
  
        for (let i = 0; i < node.hijo.length; i++) {
          this.inOrder(node.hijo[i]);
        }
      }
    }
  }
  
  class persona {
    constructor(Nombre, segundo_nombre, cumpleaños) {
      this.Nombre = Nombre;
      this.segundo_nombre = segundo_nombre;
      this.cumpleaños = cumpleaños;
      this.hijos = [];
    }
  
    addChild(hijo) {
      this.hijos.push(hijo);
    }
  
    getFullName() {
      return `${this.Nombre} ${this.segundo_nombre}`;
    }
  
    toString() {
      return `${this.getFullName()} (Born: ${this.cumpleaños})`;
    }
  }
  
  
  const yo = new persona("carlos", "andres", "31-10-2002");
  const hermano = new persona("juan","david","21-06-1995")
  const mama = new persona("luz ", "agredo", "14-05-1974");
  const papa = new persona("Diego", "Alzate", "12-03-1978");
  const abuela = new persona("Nohemi", "agredo", "30-01-1960");
  const abuelo = new persona("jaime", "ramirez", "10-08-1952");
  
  
  const familia = new arbol();
  
  
  familia.insert(yo.getFullName(), null); // Yo soy la raíz del árbol
  familia.insert(mama.getFullName(), yo.getFullName()); // Mi mamá es hija mía
  familia.insert(papa.getFullName(), yo.getFullName()); // Mi papá es hijo mío
  familia.insert(abuela.getFullName(), mama.getFullName()); // Mi abuela es hija de mi mamá
  familia.insert(abuelo.getFullName(), mama.getFullName()); // Mi abuelo es hijo de mi mamá
  
  
  console.log("Preorden:");
  familia.preOrder();
  console.log("\nPostorden:");
  familia.postOrder();
  console.log("\nInorden:");
  familia.inOrder();