const { createApp } = Vue

createApp({
    data() {
        return {
            listTasks: [
                {
                    name: "Lavatrice",
                    bool: ""
                },
                {
                    name: "Cucinare",
                    bool: ""
                }, 
                {
                    name: "Nuotare",
                    bool: ""
                },
                 {
                    name: "Mangiare",
                    bool: ""
                },
                 {
                    name: "Lavarsi",
                    bool: ""
                },
            ],
            activeTask : 0,
            newItem:"",
        
        }
    },
    methods: {
        addItem(){
            let itemNew = {
                name:this.newItem,
                bool:""
            }
            this.listTasks.push(itemNew);
            this.newItem = ""
        },
        remove(index){    console.log(newItem),
            this.listTasks.splice(index, 1)
        }
    }
}).mount('#app')