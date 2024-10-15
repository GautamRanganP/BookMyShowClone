<template>
  <div class="home-content">  
    <div class="admin-filter">
        <h3 class="">Filter</h3>
        <div class="filter-by-language" style="padding: 12px;">
            <div>
                <p style="text-align: start;margin: 12px 0px;">Languages</p>
            </div>
            <div class="filter-langugage-wrap" style="display: flex;gap:10px">
                <span>Tamil</span>
                <span>English</span>
            </div>
        </div>
    </div>

    <div class="admin-wrap"> 
        <div class="admin-page">
            <template v-for="movie of movieList" :key="movie.id">
                <MovieCard :image="movie.Poster" :title="movie.Title"></MovieCard>
            </template>
        </div>
    </div>
   </div>
</template>

<script>


import MovieCard from '../components/MovieCard.vue';
import movies from './movies.json'

export default{
    data(){
       return{ 
        movieList:movies
       }
    },
    components:{
        MovieCard
    },
    mounted(){
        console.log(this.movieList)
        // fetch('https://freetestapi.com/api/v1/movies').then((response)=>{
        //     if(!response.ok)
        //         throw new Error('Network Error')
        //     return response.json()
        // }).then((data)=>{
        //     console.log(data)
        //     this.movieList = data
        // })
    }
}

</script>

<style>
.filter-by-language{
    border: 0.6777px solid #cacaca;
}
 /* border: 0.6777px solid #cacaca; */
.filter-langugage-wrap span{
    padding: 6px 12px;
    background-color: rgb(248, 68, 100);
    color: white;
}
.filter-by-language p{
    color: rgb(248, 68, 100);;
}

.filter-content{
    border: 1px solid black;
    
}
.home-content{
    background-color: transparent;
    display: flex;
    position: relative;
}
.home-content div{
    background-color: white;
}
.admin-filter h3{
    margin-bottom: 20px;
}
    .admin-card{
        width: 400px;
        height: 400px;
    }
    .admin-filter{
        margin: 20px 0;
    max-height: 500px;
    flex: 1;
    /* border: 0.6777px solid #cacaca; */
    margin-left: 52px;
    }
    .admin-wrap{
        margin-right: 52px;
        margin-left: 20px;
        flex: 2.5;
    }
    .admin-page{
        justify-content: space-around;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>

