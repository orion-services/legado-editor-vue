<template>
    <div class="dashboard">
        <MenuSidebar />
        <router-view></router-view>
    </div>
</template>

<script>
import MenuSidebar from '@/components/MenuSidebar'
export default {
    components: {
        MenuSidebar
    }
}
</script>