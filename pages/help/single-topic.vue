<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue';
import Banner from './common/banner.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Centro de Ajuda',
                link: '/help/help-center'
            },
            {
                title: 'Tópico Individual'
            }
        ]
    }
])

definePageMeta({
    title: 'Tópico Individual',
});
</script>
<template>
    <!-- Page content-->
    <section class="container my-5 pt-lg-5 pt-4 pb-lg-4">
        <!-- Breadcrumbs-->
        <Breadcrumb :data="breadcrumbData" />

        <div class="row pt-4">
            <!-- Sidebar-->
            <aside class="col-md-4 d-md-block d-none position-relative pe-lg-5">
                <nav class="border-start sticky-top" style="top: 116px;">
                    <h3 class="h5 mb-2 pb-1 px-4">Articles in this section</h3>
                    <ul class="nav flex-column fs-sm">
                        <li class="nav-item">
                            <a class="nav-link py-1 px-4 fw-normal" href="javascript:void(0);">First question heading in the section</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link py-1 px-4 fw-normal" href="javascript:void(0);">Massa fermentum, eget nec elementum</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link py-1 px-4 fw-normal" href="javascript:void(0);">Eros, dolor in consequat netus?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link py-1 px-4 fw-normal" href="javascript:void(0);">Eu quam bibendum adipiscing leo?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link py-1 px-4 fw-normal" href="javascript:void(0);">In quis pulvinar amet morbi praesent</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link py-1 px-4 fw-normal" href="javascript:void(0);">Pellentesque ante quisque sit</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div class="col-md-8">
                <div class="pb-md-4 pb-3">
                    <h2 class="h3 mb-4">Article heading</h2>
                    <p>Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p>
                    <p>Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum leo. Auctor viverra sit sit ut. Massa, elit venenatis, ultrices viverra at sagittis, velit. Cursus tempus phasellus consectetur suspendisse a blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis at.</p>
                </div>
                <div class="pb-md-4 pb-3">
                    <h3 class="h5 mb-4">Paragraph subheading 1</h3>
                    <ul>
                        <li>Nunc felis neque non sagittis. Sodales eros suspendisse scelerisque varius neque elit elementum quis.</li>
                        <li>Sed vitae accumsan lorem pharetra dictum eget vestibulum.</li>
                        <li>Non blandit viverra laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat.</li>
                        <li>Adipiscing tristique mauris, eu sit tortor. Velit in scelerisque sit tincidunt habitant urna nec.</li>
                        <li>Justo, non massa metus convallis cursus lorem volutpat eu duis.</li>
                        <li>Ipsum dolor feugiat est tristique. Aliquam sed felis risus quis.</li>
                    </ul>
                </div>
                <div>
                    <h3 class="h5 mb-4">Paragraph subheading 2</h3>
                    <p>A nunc tempor habitasse amet aliquam in. Arcu eu quam pellentesque sed suspendisse mattis pellentesque blandit. Dui consectetur neque, imperdiet non non amet, integer volutpat condimentum. Laoreet gravida ac faucibus nunc dictum euismod quam egestas. A metus sagittis facilisi dictum cursus bibendum ipsum hendrerit. Adipiscing ornare urna massa nunc, consequat.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Us-->
    <Banner />
</template>
