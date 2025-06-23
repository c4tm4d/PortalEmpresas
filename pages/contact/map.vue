<script lang="ts" setup>
// import leaflet
import { ref } from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

interface Marker {
    coordinates: [number, number];
    popup: string;
}

const zoom = ref<number>(13);
const coordinates = ref<[number, number]>([51.5074, -0.1278]);
const mapLayer = ref<string>('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs');
const marker = ref<Marker>({
    coordinates: [51.5074, -0.1278],
    popup: "<div class='p-3'><h6>Hi, I'm in London</h6><p class='fs-sm pt-1 mt-n3 mb-0'>Lorem ipsum dolor sit amet elit.</p></div>"
});
</script>

<template>
    <section class="container pb-5 mb-2 mb-lg-5">
        <l-map :zoom="zoom" :center="coordinates" class="rounded-3" style="height: 500px" :use-global-leaflet="false">
            <l-tile-layer :url="mapLayer"></l-tile-layer>
            <l-marker :lat-lng="marker.coordinates">
                <l-popup>{{ marker.popup }}</l-popup>
            </l-marker>
        </l-map>
    </section>
</template>