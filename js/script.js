const newApp = new Vue({
   el: '#root',
   data:{
    inputToDo : [],
    textInput : '',
    active : [],
    message: '',
   },
   methods:{
     inputInArray: function(){
       if (this.textInput === ''){
         this.message = 'Attento! Inserisci un ToDo'
       } else {
         this.inputToDo.push(this.textInput);
         this.active.push(false);
         this.message = " Hai " + this.inputToDo.length + " cose da fare"
       }
     },
     removeInput: function(delIndex){
       this.inputToDo.splice(delIndex, 1);
       this.active.splice(delIndex, 1);
       this.message = " Hai " + this.inputToDo.length + " cose da fare"
     },

     activate(index){
       this.$set(this.active, index, !this.active[index]);
     }

   }
})
