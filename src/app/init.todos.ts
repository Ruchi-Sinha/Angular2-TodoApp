export class Init{
  load(){
    if(localStorage.getItem("todos") === null || localStorage.getItem("todos") == undefined){
      console.log("No todos found...Creating");
      var todos = [
        {text: 'Wash clothes'},
        {text: 'Pickup groceries'},
        {text: 'Buy flowers'}
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      return
    }
    else{
    console.log("todos found");
    }
  }
}
