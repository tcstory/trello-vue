<template>
    <section class="todo-list">
        <header class="header">
            <span class="text">待解决</span>
        </header>
        <todo></todo>
        <todo></todo>
        <button class="add-new-todo-btn">
            <span class="text">Add a card</span>
        </button>
    </section>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .reset-btn {
        outline: none;
        background: none;
        border: none;
        font-size: 100%;
    }

    .todo-list {
        background: #E2E4E6;
        width: 16.875em;
        padding: .625em .375em;
        border-radius: .25em;
        margin: .5em 1em 0 0;
        display: inline-block;
    }

    .header {
        height: 2.125em;
        padding-left: .5em;
        .text {
            font-size: .875em;
            font-weight: 700;
            color: hsl(0, 0%, 30%);
        }
    }

    .add-new-todo-btn {
        @extend .reset-btn;
        color: hsl(0, 0%, 30%);
        height: 2.125em;
        width: 100%;
        text-align: left;
        padding-left: .5em;
        border-radius: .25em;
        cursor: pointer;
        margin-top: .375em;
        .text {
            font-size: .875em;
        }
        &:hover {
            background-color: hsl(197, 8%, 82%);
            text-decoration: underline;
        }
    }
</style>

<script type="text/babel">
    import Todo from './components/todo/index.vue';
    export default {
        components: {
            'todo': Todo
        }
    }
</script>