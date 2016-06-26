<template>
    <article class="stage">
        <header class="header">编程猫平台开发</header>
        <todo-list></todo-list>
        <todo-list></todo-list>
    </article>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .stage {
        background: #0079BF;
        height: calc(100% - 2.5em);
        padding: 1em .625em;
    }
    .header {
        font-size: 18px;
        font-weight: 700;
        color: hsl(0, 0%, 100%);
    }
</style>


<script type="text/babel">
    import TodoList from '../todo-list/index.vue';
    export default {
        components: {
            'todo-list': TodoList
        }
    }
</script>