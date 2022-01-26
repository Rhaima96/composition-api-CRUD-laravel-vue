import {createRouter, createWebHistory } from '../../../node_modules/vue-router';

import Example from '../components/ExampleComponent.vue';
import Companies from '../components/Companies.vue';
import CreateCompany from '../components/CreateCompany.vue';
import EditCompany from '../components/EditCompany.vue';

const routes = [

    {
        path : '/',
        name : 'example',
        component : Example
    },
    {
        path : '/companies',
        name : 'Companies',
        component : Companies
    },
    {
        path : '/create',
        name : 'CreateCompany',
        component : CreateCompany
    },
    {
        path : '/edit/:id',
        name : 'EditCompany',
        component : EditCompany
    },
]

export default createRouter({
    history : createWebHistory(),
    routes
})

