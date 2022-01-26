<template>

    <div v-for="error in errors" :key="error" class="alert alert-danger alert-dismissible fade show" role="alert">
    {{ error[0] }} &nbsp;
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <form class="my-1" @submit.prevent="saveCompany">
        <div class="py-4 rounded shadow-sm">
            <div>
                <label for="name" class="block text-sm  text-secondary">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name"
                           class="block mt-1 rounded border-secondary shadow-sm"
                           v-model="form.name">
                </div>
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-secondary">Email</label>
                <div class="mt-1">
                    <input type="text" name="email" id="email"
                           class="block mt-1 rounded border-secondary shadow-sm"
                           v-model="form.email">
                </div>
            </div>

            <div>
                <label for="address" class="block text-sm font-medium text-secondary">Address</label>
                <div class="mt-1">
                    <input type="text" name="address" id="address"
                           class="d-block mt-1 rounded border-secondary shadow-sm"
                           v-model="form.address">
                </div>
            </div>

            <div>
                <label for="website" class="d-block text-sm font-medium text-secondary">Website</label>
                <div class="mt-1">
                    <input type="text" name="website" id="website"
                           class="d-block mt-1 rounded border-secondary shadow-sm"
                           v-model="form.website">
                </div>
            </div>
        </div>

        <button type="submit"
                class="btn btn-lg btn-success">
            Create
        </button>
    </form>
</template>

<script>
import { reactive } from 'vue';
import useCompanies from "../composables/companies"
export default {
    setup () {
            const form = reactive({
                'name' : '',
                'email' : '',
                'address' : '',
                'website' : '',
            })

           const {storeCompany, errors} = useCompanies()
            const saveCompany = async () => {
                    await storeCompany(form)
            }

        return {
            form,
            errors,
            saveCompany
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
