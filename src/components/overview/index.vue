<template>
    <article class="overview">
        <section class="row">
            <header class="header">
                <span class="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                <span class="header-text">My Boards</span>
            </header>
            <div class="wrapper">
                <div class="board">
                    <p class="board-title">Welcome Board</p>
                </div>
                <div class="board" @click="gotoBoard">
                    <p class="board-title">日常</p>
                </div>
                <div class="board-btn">
                    <p class="prompt-text">Create new board...</p>
                </div>
            </div>
        </section>
    </article>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .overview {
        margin: 3em 1em;
    }
    .header {
        color: #4d4d4d;
        margin-bottom: .5em;
        .icon {
            width: 1.875em;
            height: 1.875em;
            display: inline-block;
            text-align: center;
            line-height: 1.875em;
            .fa-user {
                font-size: 1.25em;
            }
        }
        .header-text {
            font-weight: 700;
        }
    }
    .row {

    }
    .wrapper {
        display: flex;
    }
    .board {
        width: 18.75em;
        height: 6.25em;
        background: #0079BF;
        border-radius: .25em;
        border: .0625em solid transparent;
        cursor: pointer;
        margin-right: 1em;
        &:hover {
            background: hsla(202,85%,37%,1);
        }
    }
    .board-btn {
        width: 18.75em;
        height: 6.25em;
        border-radius: .25em;
        border: .0625em solid transparent;
        cursor: pointer;
        margin-right: 1em;
        background-color: #d6dadc;
        color: #4d4d4d;
        text-align: center;
        line-height: 6.25em;
        &:hover {
            background: hsla(200,8%,90%,1);
        }
        .prompt-text {
            font-size: 14px;
        }
    }
    .board-title {
        font-weight: 700;
        color: white;
        margin: .5em .625em;
    }
</style>

<script type="text/babel">
    export default {
        methods: {
            gotoBoard() {
                this.$route.router.go({
                    name: 'stage'
                })
            }
        }
    }
</script>