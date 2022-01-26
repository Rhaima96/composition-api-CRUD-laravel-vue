<template>
    <div>
        <div class="row mb-2">
            <div class="col"><h1>Table of Companies</h1></div>
            <div class="col d-flex justify-content-end"><router-link class="btn btn-success" :to="{name:'CreateCompany'} ">Add Company</router-link> </div>
        </div>
        <table class="table table-bordered">
            <tbody>
                <tr v-for="company in companies" :key="company.id">
                <td >{{company.id}} </td>
                <td >{{company.name}} </td>
                <td >{{company.email}} </td>
                <td >{{company.address}} </td>
                <td >{{company.website}} </td>
                <td >
                    <button class="btn btn-primary">show</button>
                    <router-link :to="{name : 'EditCompany', params : {id : company.id}, props:true} " class="btn btn-warning mx-1">edit</router-link>
                    <button @click="deleteCompany(company.id)" class="btn btn-danger">delete</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import useCompanies from "../composables/companies"

import {onMounted} from 'vue'

    export default {
        setup() {
            const {companies, getCompanies, destroyCompany} = useCompanies()
            onMounted(getCompanies)

            const deleteCompany = async (id) => {

                if (!window.confirm('Are sure to delete this company!?')) {
                    return
                }
                await destroyCompany(id)
                await getCompanies()
            }

            return {
                companies, deleteCompany
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
