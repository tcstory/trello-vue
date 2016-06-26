<template>
    <article class="todo">
        <div class="label"></div>
        <div class="content">登陆页面要做成响应式的</div>
        <div class="member-name">中华田园犬</div>
        <div class="pencil-icon">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
    </article>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .todo {
        width: 100%;
        min-height: 6em;
        background: hsl(0, 0%, 100%);
        border-radius: .25em;
        padding: .5em;
        display: flex;
        flex-direction: column;
        position: relative;
        cursor: pointer;
        margin-bottom: .5em;
        &:last-of-type {
            margin-bottom: 0;
        }
        &:hover {
            .pencil-icon {
                visibility: visible;
            }
            background: hsl(200,9%,94%);
        }
    }
    .pencil-icon {
        visibility: hidden;
        color: hsl(0, 0%, 30%);
        position: absolute;
        width: 1.5em;
        height: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .25em;
        top: .25em;
        right: .25em;
        &:hover {
            background-color: hsl(200, 8%, 85%);
        }
    }
    .label {
        background-color: hsl(110, 45%, 53%);
        width: 2.5em;
        height: .5em;
        border-radius: .25em;
    }
    .content {
        color: hsl(0, 0%, 30%);
        font-size: .875em;
        padding: .5em 0;
        flex-grow: 1;
    }
    .member-name {
        background-color: hsl(200, 8%, 85%);
        border-radius: .1875em;
        color: hsl(0, 0%, 30%);
        height: 1.875em;
        display: inline-block;
        font-size: .75em;
        line-height: 1.875em;
        flex-grow: 0;
        text-align: center;
        position: absolute;
        bottom: .25em;
        right: .25em;
        padding: 0 .25em;
        font-weight: 700;
    }
</style>

<script type="text/babel">
    export default {

    }
</script>