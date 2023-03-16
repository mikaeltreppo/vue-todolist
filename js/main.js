const { createApp } = Vue

createApp({
    data() {
        return {
            listTasks: [
                {
                    name: "Lavatrice",
                    bool: true
                },
                {
                    name: "Cucinare",
                    bool: true
                },
                {
                    name: "Nuotare",
                    bool: true
                },
                {
                    name: "Mangiare",
                    bool: true
                },
                {
                    name: "Lavarsi",
                    bool: true
                },
            ],

            newItem: "",

        }
    },
    methods: {
        addItem() {
            let itemNew = {
                name: this.newItem,

            }
            this.listTasks.push(itemNew);
            this.newItem = ""
        },
        remove(index) {
            this.listTasks.splice(index, 1)
        }
    }
}).mount('#app')