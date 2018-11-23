<template>
    <md-toolbar class="md-transparent">
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <h3 class="md-title"><router-link to="/"><img src="../assets/img/logo-shalex.png" alt="shalex"/></router-link></h3>
            </div>
            <div class="md-toolbar-section-end">
                <md-button class="md-just-icon md-simple md-toolbar-toggle">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse">
                    <div class="md-collapse-wrapper">
                        <md-list>
                            <md-list-item to="/">
                                <i class="material-icons">home</i>
                                <p class="hidden-sm hidden-xs">Главная</p>
                            </md-list-item>

                            <md-list-item to="/films">
                                <i class="material-icons">ondemand_video</i>
                                <p class="hidden-sm hidden-xs">Фильмы</p>
                            </md-list-item>
                            
                            <md-list-item to="/jsonpost">
                                <i class="material-icons">library_books</i>
                                <p class="hidden-sm hidden-xs">JsonPost</p>
                            </md-list-item>

                            <md-list-item to="/about">
                                <i class="material-icons">person</i>
                                <p class="hidden-sm hidden-xs">О проекте</p>
                            </md-list-item>
                        </md-list>
                    </div>
                </div>
            </div>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
    
    }
</script>

<style>
    .md-toolbar .md-collapse {
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }
    .md-toolbar .md-list {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row;
        flex-flow: row;
        padding-top: 0;
        padding-bottom: 0;
        color: inherit !important;
        background-color: transparent !important;
    }
    .md-list-item a {
        color: inherit !important;
        padding-top: 15px;
        padding-bottom: 15px;
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
        overflow: visible;
        border-radius: 3px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0;
        text-decoration: none;
    }
    .md-list-item-content {
        min-height: 48px;
        padding: 4px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: padding .4s cubic-bezier(.25,.8,.25,1);
        will-change: padding;
    }
.md-button .md-ripple {
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.md-button .md-button-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.md-list-item .md-button.md-button-link:not(.md-just-icon):not(.md-btn-fab):not(.md-icon-button):not(.md-toolbar-toggle) .md-ripple .md-button-content i {
    font-size: 20px !important;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 24px;
    min-width: 24px;
}
.md-list-item a .md-ripple p {
    font-weight: 400;
    font-size: 12px;
    margin: 0;
}
.md-list-item a i + p {
    margin: 0;
    margin-left: 5px !important;
}
</style>
