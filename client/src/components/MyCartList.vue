<template>
    <div>
        <div class="columns is-multiline is-mobile">
            <div v-for="eachData in cartData" :key="eachData"  class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img v-bind:src="eachData.itemImage" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{eachData.itemName}}</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                        </div>
                        <br>
                        <h3><b>Rp {{eachData.itemPrice}}.00,-</b></h3>
                         <div class="buttons">
                            <b-button rounded>Buy</b-button>
                            <b-button @click="swalDelete(eachData._id)" rounded>Delete</b-button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Axios from 'axios';
import Swal from 'sweetalert2';
export default {
    data(){
        return {
            cartData : ''
        }
    },
    methods : {
        getAllCart(){
            Axios.get(`http://localhost:3000/cart/showCart/${localStorage.getItem("userId")}`, {headers :{token : localStorage.getItem("token")}})
            .then(({data}) => {
                this.cartData = data
            })
        },
        swalDelete(chartId){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    this.deleteFromCart(chartId)
                if (result.value) {
                    this.getAllCart()
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
            })
            
        },
        deleteFromCart(cartId){
            Axios.delete(`http://localhost:3000/cart/deleteCart/${cartId}`, {headers : {token : localStorage.getItem("token")}})
            .then(({data}) =>{
                console.log('deleted')
            })
        }
    },
    created(){
        this.getAllCart()
    }
}
</script>

<style>

</style>
