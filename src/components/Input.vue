<template>
    <div class="input-wrap">
        <label :for="label">{{ label.slice(0,1).toUpperCase() + label.slice(1) }}</label>
        <input :type="type" :id="label" :value="value" @input="input" @keydown.space="(event) => event.preventDefault()">
    </div>
</template>

<script>
export default{
    props:{
        type:{
            type:String,
            default:'text'
        },
        value:{
            type:String,
        },
        label:{
            type:String,
        },
        input:{
            type:Function
        }
    },
    methods:{
        // handleInput(e){
        //     this.$emit('updateInput',e.data)
        // }
    }
}

</script>

<style>
    .input-wrap{
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width:250px;
    }
    .input-wrap input{
        padding: 6px;
        width: 100%;
        margin-bottom: 20px;
    }
</style>