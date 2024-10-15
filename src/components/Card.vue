<template>
    <div class="com-card-container">
        <div v-for="product in products" :product="product.id" class="com-card" v-if="products.length > 0">
            <img :src="product.image" :alt="product.title" width="200" height="200">
            <p>{{ product.title }}</p>
            <p><span>$ </span>{{ product.price }}</p>
        </div>
        <div v-if="products.length === 0">
            Loading...
        </div>
    </div>
</template>
 
<script>
export default{
    data(){
        return{
            products:[]
        }
    },
    methods:{
        fetchProducts(){
            //https://fakestoreapi.com/products
            // https://fake-store-api.mock.beeceptor.com
            fetch('https://fakestoreapi.com/products').then((response)=>{
                if(!response.ok){
                    throw new Error('network errot')
                }
                return response.json()
            }).then((data)=>{
                this.products = data
                console.log("data",data)
            }).catch((error)=>{
                console.log('error',error)
            })
        }
    },
    mounted(){
        this.fetchProducts()
    }
}
 
</script>
 
<style>
.com-card-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.com-card{
    width:350px;
    padding: 8px;
    border:0.67778px solid rgb(165, 165, 165);
    margin-bottom:20px;
    /* border-radius:10px; */
    display:flex;
    gap: 20px;
    flex-direction: column;
    /* box-shadow:5px 5px 10px rgb(165, 165, 165); */
}
.com-card img{
    margin:10px auto;
}
 
</style>
 