<template>
    <div>
    <section v-if="show == ''">
        <form>
            <b-field label="Username"
                :type="{'is-danger': errors.has('username')}"
                :message="errors.first('username')">
                <b-input type="text" v-model="username" name="username" v-validate="'required|alpha'" />
            </b-field>

            <b-field label="Password"
                :type="{'is-danger': errors.has('password')}"
                :message="errors.first('password')">
                <b-input type="password" v-model="password" name="password" v-validate="'required|min:8'" />
            </b-field>

            <b-field label="email"
                :type="{'is-danger': errors.has('email')}"
                :message="errors.first('email')">
                <b-input type="text" v-model="email" name="email" v-validate="'required|alpha'" />
            </b-field>
            <button @click.prevent="register" type="submit" class="button is-primary"> register </button><br>
            <button @click.prevent="goLogin" type="submit" class="button is-primary"> login </button>
        </form>
    </section>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
