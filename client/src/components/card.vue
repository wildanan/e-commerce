<template>
    <div class="container is-widescreen">
        <div class="columns is-multiline is-mobile">
            <div v-for="eachData in allData" :key="eachData"  class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img v-bind:src="eachData.image" alt="Placeholder image">
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

                        <div class="content">
                        <p>{{eachData.description}}</p>
                        <br>
                        <small>stock : {{eachData.stock}}</small>
                        <br>
                        <h3><b>Rp {{eachData.price}}.00,-</b></h3>
                         <div class="buttons">
                            <b-button rounded>Buy</b-button>
                            <b-button rounded v-if="adaYgLogin" @click="addToChart(eachData._id, eachData.itemName, eachData.price, eachData.image)"> add to cart <i class="fas fa-cart-arrow-down"></i> </b-button>
                            <b-button @click="confirm(eachData._id)" rounded v-if="isAdmin == 'admin'">Delete Item</b-button>
                            <b-button @click="edit(eachData._id)" rounded>Edit</b-button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    props: ['text'],
    data(){
        return{
            allData : '',
            adaYgLogin : `${localStorage.getItem("token")}`,
            tempItemName : '',
            tempPrice : '',
            tempImage : '',
            isAdmin : ''
        }
    },
    methods : {
        getData(){
            axios.get('http://localhost:3000/item/allItem').then(({data}) => {
                // console.log(data, 'halo')
                this.allData = data
            })
        },
        addToChart(itemId, name, rpice, image){
            Swal.fire({
                title: `Add this item to your cart? ${itemId}`,
                type: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, add it!'
                }).then((result) => {
                    console.log(itemId, `${localStorage.getItem("userId")}`, 'keluar ga?')
                    this.addCart(itemId, `${localStorage.getItem("userId")}`, name, rpice, image)
                    if (result.value) {
                    Swal.fire(
                    ' add to cart sucess!',
                    'You has been added 1 item to cart',
                    'success'
                    )
                }
            })
        },
        addCart(iId, uId, iN, iP, iI){
            axios.post(`http://localhost:3000/cart/addToCart/${uId}/${iId}`, {itemName : iN, itemPrice : iP, itemImage : iI}, {headers : {token : `${localStorage.getItem("token")}`}})
            .then(({data}) => {
                console.log('added')
            })

        },
        cekAdmin(){
            if(localStorage.getItem("role") == 'admin'){
                this.isAdmin = 'admin'
            }else{
                this.isAdmin = 'no'
            }
        },
        confirm(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    this.adminDelete(id)
                if (result.value) {
                    this.getData()
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
            })
        },
        adminDelete(id){
            axios.delete(`http://localhost:3000/item/delete/${id}`, {headers : {token : localStorage.getItem("token"), email : localStorage.getItem("email"), role : localStorage.getItem("role")}})
        },
        edit(id){
            this.$router.push('/admin/editItem')
        }
    },
    created(){
        this.getData()
        this.cekAdmin()
    }
}
</script>

<style>

</style>
