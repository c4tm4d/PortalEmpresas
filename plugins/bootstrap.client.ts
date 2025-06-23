import { Tooltip, Popover } from 'bootstrap';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:mounted', () => {
        // Initialize tooltips
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(tooltipTriggerEl => {
            new Tooltip(tooltipTriggerEl);
        });

        // Initialize popovers
        const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.forEach(popoverTriggerEl => {
            new Popover(popoverTriggerEl);
        });
    });
});