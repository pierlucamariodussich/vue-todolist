const newApp = new Vue({
   el: '#root',
   data:{
    inputToDo : [],
    textInput : '',
    message: document.getElementById('message'),
   },
   methods:{
     inputInArray: function(){

         this.inputToDo.push(this.textInput);
      
     },
     removeInput: function(delIndex){
       this.inputToDo.splice(delIndex, 1);
     },
   }
})
