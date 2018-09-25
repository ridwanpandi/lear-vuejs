<template>
    <div>
        {{ numbers }}
        <Child 
        :numbers="numbers"
        @add-number="numbers.push($event)"></Child>
        <Child2></Child2>
    </div>
</template>

<script>
import Child from './ChildComponent.vue'
import Child2 from './ChildComponent2.vue'

export default {
    data(){
        return {
            numbers: [1,2,3]
        }
    },
    components: {
        Child,
        Child2
    }
}
</script>
