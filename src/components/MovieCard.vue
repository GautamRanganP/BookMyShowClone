<template>
    <div class="movie-card">
        <img :src="image" width="250" height="310">
        <h4>{{ title }}</h4>
    </div>
</template>
<script>
export default{
    data(){

    },
    props:{
        image:{
            type:String,
        },
        title:{
            type:String,
        },
        genre:{
            type:Array
        } 
    }
}

</script>

<style>
    .movie-card{
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-wrap: wrap;
    }
    .movie-card h4{
        max-width: 250px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>