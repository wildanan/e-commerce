<template>
    <hooper ref="carousel" @slide="updateCarousel" style="height : 600px">
        <slide style="background-image : url('https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size : cover">
        </slide>
        <slide style="background-image : url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size : cover">
        slide 2
        </slide>
        ...
    </hooper>
    
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'Corusel',
    components: {
        Hooper,
        Slide
    }
}
</script>

<style>

</style>
