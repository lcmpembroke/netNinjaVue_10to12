// Net Ninja Vue tutorial...sessions 10 - 

new Vue({
    el: '#vue-app',
    data: {
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
]        
    },
    methods: {
       
        
    },
    computed: {
        computedClasses() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }

    },
});