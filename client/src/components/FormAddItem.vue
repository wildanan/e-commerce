<template>
<div class="columns is-mobile is-centered ">
    <div class="column is-half">
        <section>
            <form>
                <b-field label="Item Name"
                    :type="{'is-danger': errors.has('itemName')}"
                    :message="errors.first('itemName')">
                    <b-input type="text" v-model="itemName" name="itemName" v-validate="'required|alpha'" />
                </b-field>

                <b-field label="Stock"
                    :type="{'is-danger': errors.has('stock')}"
                    :message="errors.first('stock')">
                    <b-input type="stock" v-model="stock" name="stock" v-validate="'required|min:8'" />
                </b-field>
                <b-field label="Description"
                    :type="{'is-danger': errors.has('description')}"
                    :message="errors.first('description')">
                    <b-input type="description" v-model="description" name="description" v-validate="'required|min:8'" />
                </b-field>

                <b-field label="Price"
                    :type="{'is-danger': errors.has('price')}"
                    :message="errors.first('price')">
                    <b-input type="text" v-model="price" name="price" v-validate="'required|alpha'" />
                </b-field>
                <b-field label="Image"
                    :type="{'is-danger': errors.has('image')}"
                    :message="errors.first('image')">
                    <b-input type="text" v-model="image" name="image" v-validate="'required|alpha'" />
                </b-field>
                <button @click.prevent="addItem" type="submit" class="button is-primary"> Add Item </button>
            </form>
        </section>
    </div>
</div>
</template>

<script>
import Axios from 'axios';
export default {
    data(){
        return{
            itemName : '',
            stock : '',
            price :'',
            image : ''
        }
    },
    methods : {
        addItem(){

            Axios.post('http://localhost:3000/item/addItem', {itemName : this.itemName, stock : this.stock, price : this.price, image : this.image, description : this.description}, {headers : {token : localStorage.getItem("token"), role : `${localStorage.getItem("role")}`, email : `${localStorage.getItem("email")}`}})
            .then(({data}) => {
                console.log('data Added')
                this.$router.replace({ path: '/' })
            })
        }
    }
}
</script>

<style>

</style>
