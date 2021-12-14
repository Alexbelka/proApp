let btn = document.getElementById('pressBtn');
let root = document.getElementById('root');
let menu = document.getElementById('menu');

 async function createRequest(){
  
 return fetch('https://jsonplaceholder.typicode.com/users').then(response =>{

    return response.json()

  })

}

class PersonsList{

    constructor(){  }

    async fetchPosts(){
 
        let responseUsers = await createRequest() 
        
        for(let i = 0; i < responseUsers.length; i++){
        
            Object.keys(responseUsers[i]).forEach((item) => {
        
               if(item !== 'id' && item !== 'name' && item !=='username' && item !=='email'){
        
                  delete responseUsers[i][item]
        
               }
            })
          }   

    
    for(let i in responseUsers){

       const person = new PersonItem(responseUsers[i])
    
      menu.appendChild(person.render())
   
    }

     }

     begin(){

        const btn = document.getElementById('pressBtn');

        btn.addEventListener('click',this.fetchPosts.bind(this))

     }
}


class PersonItem{
    constructor(person){
      this.person = person
    }
 
identifyItem(){
 App.stay(this.person)
}

 render(){
 const prodItem = document.createElement('li')
 prodItem.className = 'prod-item'
 prodItem.innerHTML = `
 <h2>${this.person.id}</h2>
 <h3>${this.person.name}</h3>  
 <h4>${this.person.email}</h4>
 <h5>${this.person.username}</h5>
 <button>Удалить пользователя</button>
 ` 

const getButton = prodItem.querySelector('button') 
getButton.addEventListener('click',this.identifyItem.bind(this))
return prodItem
  }
}


class PersonBasket{
  constructor(){}
  items = [1];
  
  addItem(product){
    this.items.push(product)
    console.log(this.items)
    // this.totalOutput = `<h2>Total:\$${1}</h2>`
  }

  render(){
    this.item = new PersonItem();
    const section = document.createElement('section');
    console.log(this.items)
    section.innerHTML = `
    <h2>Total:\$${this.items.length}</h2>
    <button>Order Now!!</button>
    `;
    section.className = 'cart'
    this.totalOutput = section.querySelector('h2')
    return section;
  }
}


class App {
  constructor(){}
  static render(){
    let getData = new PersonsList();
    getData.begin();
    const basket = new PersonBasket().render();
    root.append(basket);
  }
   static stay(item){
    this.unit = new PersonBasket()
    console.log(item)
    this.unit.addItem(item)
  }
}

 App.render()












