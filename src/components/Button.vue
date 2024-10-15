<template>
    <button :type="type">{{ label }}</button>
</template>

<script>
export default{
    props:{
        label:{
            type:String,
        },
        type:{
            type:String,
            default:'button'
        }
    }
}
</script>

<style>
    button{
        padding: 8px;
        border: none;
        min-width: 100px;
        color: white;
        background-color: rgb(37, 134, 252);
    }


</style>
