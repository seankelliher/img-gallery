<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { images } from "../data/images.js";

onMounted(() => {
    const thumbs = document.querySelectorAll(".small img");
    thumbs[0].style.opacity = 0.7;
});

const count = ref(0);

function prevArrow() {
    if (count.value === 0) {
        count.value = images.length - 1;
        opacity();
    } else {
        count.value--;
        opacity();
    }
}

function nextArrow() {
    if (count.value === images.length - 1) {
        count.value = 0;
        opacity();
    } else {
        count.value++;
        opacity();
    }
}

function thumbImage(index) {
    count.value = index;
    opacity();
}

function opacity() {
    const thumbs = document.querySelectorAll(".small img");
    thumbs.forEach(function(thumb) {
        if (thumb.style.opacity !== 1) {
            thumb.style.opacity = 1;
        }
    });
    thumbs[count.value].style.opacity = 0.6;
}
</script>

<template>
    <div id="container">

        <section class="large-box">
            <figure class="large">
                <img
                    :src="`./images/${images[`${count}`].file}.jpg`"
                    :alt="`${images[`${count}`].desc}`"
                >

                <svg @click="prevArrow" @keyup.enter="prevArrow" id="previous-arrow" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path pointer-events="none" d="M0 0h24v24H0z" fill="none"/><path pointer-events="none" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" stroke="#1a1c1e" tabindex="0"/></svg>

                <svg @click="nextArrow" @keyup.enter="nextArrow" id="next-arrow" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path pointer-events="none" d="M0 0h24v24H0z" fill="none"/><path pointer-events="none" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" stroke="#1a1c1e" tabindex="0"/></svg>
            </figure>
        </section>

        <section class="caption-box">
            <p id="caption">
                {{ images[`${count}`].desc }}
            </p>
        </section>

        <section class="thumbnails-box">
            <figure
                @click="thumbImage(index)"
                @keyup.enter="thumbImage(index)"
                v-for="(image, index) in images"
                :key="image.id"
                class="small"
                tabindex="0"
            >
            <img
                :src="`./images/${image.file}-sm.jpg`"
                :alt="`${image.desc}`"
            >
            </figure>
        </section>

    </div> <!--close #container-->
</template>
