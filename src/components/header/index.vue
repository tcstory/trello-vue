<template>
    <header>
        <div class="header-user">
            <div class="add-new-board-btn header-btn">
                <i class="fa fa-plus icon" aria-hidden="true"></i>
            </div>
            <div class="user-name header-btn">
                <span v-text="userName"></span>
            </div>
            <div class="header-notification header-btn">
                <i class="fa fa-bell-o icon" aria-hidden="true"></i>
            </div>
        </div>
    </header>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .header-btn {
        width: 1.875em;
        height: 1.875em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: linear-gradient(to bottom, rgba(255, 255, 255, .3) 0, rgba(255, 255, 255, .2) 100%);
        border-radius: .125em;
        margin-right: .625em;
        cursor: pointer;
    }
    .header-btn:last-child {
        margin-right: .375em;
    }
    .header-btn:hover {
        background: linear-gradient(to bottom,rgba(255,255,255,.4) 0,rgba(255,255,255,.3) 100%);
    }
    header {
        background-color: #026aa7;
        height: 2.5em;
        padding: .25em;
        display: flex;
        justify-content: flex-end;

    }
    .header-user {
        display: flex;
    }
    .add-new-board-btn {
    }
    .header-notification {
    }
    .user-name {
        min-width: 2.5em;
        width: auto;
        padding: 0 .25em;
    }
    .user-name > span {
        font-size: .875em;
    }
</style>

<script type="text/babel">
    export default {
        data() {
            return {
                userName: '甜脆的故事'
            }
        }
    }
</script>