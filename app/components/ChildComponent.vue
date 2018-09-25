<template>
    <div>
        <p>Numbers First Child Component : {{ numbers }}</p>
        <p>ChildNumbers in First Child Component : {{ childnumbers }}</p>
        <input type="text" v-model="number">
        <button @click="$emit('add-number', Number(number))">Add Number</button>
    </div>
</template>

<script>
import {EventBus} from '../events/event-bus.js'

export default {
    name: "ChildComponent",
    props:{
        numbers: Array
    },
    data() {
        return {
            childnumbers: [3,2,1],
            number: 0
        }
    },
    created(){
        EventBus.$on("add-number-childcomponent2", newNumber => {
            this.childnumbers.push(newNumber)
        })
    },
}
</script>

