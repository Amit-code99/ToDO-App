let todoList= [ 
    {
         item:'Yoga / Gym '  ,
          dueDate:'Daliy'
        },
        {
            item:' Javascript Learn ' ,
            dueDate:' Daliy'
          },   
        
    ];
  displayItem();

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement= document.querySelector('#todo-date');
    let todoItem=inputElement.value ;
    let dateInput=dateElement.value ;
    todoList.push({item: todoItem, dueDate: dateInput});
    localStorage.setItem('Data',JSON.stringify(todoList));
    inputElement.value= '';
    dateElement.value='';

    displayItem() ;
}



 function displayItem(){
    let containerElement= document.querySelector('#todo-container');
    let newHtml= '';
    for(let i = 0; i<todoList.length; i++){
        let itemName= todoList[i].item;
        let itemDate= todoList[i].dueDate;
       // let getData= JSON.parse(localStorage.getItem('saveData'));
        //let {item, dueDate} = todoList[i];
        newHtml += `
            <span class="spn-btn"> ${itemName}  </span>
            <span class="spn-btn"> ${itemDate}  </span>
            <button class="delete-btn" onclick="todoList.splice(${i}, 1); 
            displayItem();"> Delete</button>
            `;
            JSON.parse( localStorage.getItem(todoList));
    }
    containerElement.innerHTML = newHtml;
   
 }