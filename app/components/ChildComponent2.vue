<template>
    <div>
        <button @click="addNumber()">add 9 value to numbers from ChildComponent2</button>
    </div>
</template>

<script>
import {EventBus} from '../events/event-bus.js'

export default {
    name: "ChildComponent2",
    data() {
        return {
            number: 9
        }
    },
    methods: {
        addNumber(newNumber) {
            // bisa get newNumber juga tapi kasih parameter di addNumber 
            EventBus.$emit("add-number-childcomponent2", Number(this.number))
        }
    }
}
</script>

<style>

</style>
