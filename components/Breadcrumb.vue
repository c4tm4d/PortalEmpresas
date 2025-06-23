<script lang="ts" setup>
defineProps<{
    data: {
        title: string,
        link?: string,
        subitems?: {
            title: string,
            link?: string | unknown
        }[]
    }[]
}>();
</script>
<template>
    <nav class="mb-3 pt-md-2" aria-label="Breadcrumb">
        <ol class="breadcrumb">
            <template v-for="item in data">
                <li class="breadcrumb-item" :class="{ 'active': !item.link }">
                    <nuxt-link v-if="item.link" :to="item.link">{{ item.title }}</nuxt-link>
                    <template v-else>{{ item.title }}</template>
                </li>
                <template v-for="subitem in item.subitems || []">
                    <li class="breadcrumb-item" :class="{ 'active': !subitem.link }">
                        <nuxt-link v-if="subitem.link" :to="subitem.link">{{ subitem.title }}</nuxt-link>
                        <template v-else>{{ subitem.title }}</template>
                    </li>
                </template>
            </template>
        </ol>
    </nav>
</template>
