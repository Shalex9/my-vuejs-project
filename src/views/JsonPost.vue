<template>
    <div class="jsonpost">   
        <h1 class="title">Work with JSON from jsonplaceholder.typicode.com</h1>     
        <div class="main main-raised">
            <md-tabs class="md-transparent" md-alignment="fixed" md-active-tab="tab-home">
                <md-tab id="tab-home" md-label="All Post" >
                    <h3 class="count">Count posts: {{countposts}}</h3>
                    <div class="post" v-for='post in posts' :key="post.id">
                        <span>{{post.id}}</span>
                        <h3>{{post.title}}</h3>
                        <p>{{post.body}}</p>
                    </div>
                </md-tab>

                <md-tab id="tab-pages" md-label="Add Post">
                    <h3 class="count">Create new post</h3>
                    <md-field :class="titleClass">
                        <label>Title post</label>
                        <md-input v-model="newPost.title" placeholder="Title for post" required @blur="checkTitle"></md-input>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    <md-field :class="messageClass">
                        <label>Text for post</label>
                        <md-textarea v-model="newPost.body" required @blur="checkMessages"></md-textarea>
                        <span class="md-error">There is an error</span>
                    </md-field>
                    <!--<md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>-->
                    <md-button class="md-raised md-primary" prevent @click="getSinglePost">Save</md-button>
                </md-tab>

                <md-tab id="tab-posts" md-label="Post by ID">
                    <h3 class="count">Current post: {{post.id}}</h3>
                    <md-field md-inline class="mb20px">
                        <label>Search for ID</label>
                        <md-input v-model="idForSearch"></md-input>
                        <md-icon>search</md-icon>
                        <md-button class="md-raised md-primary" prevent @click="addPost">Search</md-button>
                    </md-field>                    
                    <div class="post" v-if="hasPost">
                        <span>{{post.id}}</span>
                        <h3>{{post.title}}</h3>
                        <p>{{post.body}}</p>
                    </div>
                    <div v-else>
                        <h3 style="color: red">id is not correct</h3>
                    </div>
                </md-tab>

                <md-tab id="tab-favorites" md-label="Delete Post by ID">
                    <h3 class="count">Delete post: </h3>
                    <md-field md-inline class="mb20px">
                        <label>Search for ID</label>
                        <md-input v-model="idForDelete"></md-input>
                        <md-icon>search</md-icon>
                        <md-button class="md-raised md-primary" prevent @click="deletePost">Delete</md-button>
                    </md-field> 
                    <div class="post" v-if="deletedPost">
                        <h3>Post #{{idForDelete}} deleted succesfully!</h3>
                    </div>
                    <div v-else>
                        <h3 style="color: red">ID is not correct</h3>
                    </div>
                </md-tab>
            </md-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JsonPost',
        data() {
            return {
                endpoint: 'https://jsonplaceholder.typicode.com/posts',
                posts: [],
                post: {},
                postForDelete: {},
                newPost: {},
                countposts: 0,
                idForSearch: 1,
                idForDelete: 0,
                hasPost: false,
                deletedPost: false,
                hasTitle: false,
                hasText: false
            }
        },
        computed: {
            resource: function(){
                return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
            },
            titleClass () {
                return {
                    'md-invalid': this.hasTitle
                }
            },
            messageClass () {
                return {
                    'md-invalid': this.hasText
                }
            }
        },
        methods: {
            checkTitle: function(){                
                if(this.newPost.title == undefined || this.newPost.title == '')
                    this.hasTitle= true
                else
                    this.hasTitle = false
            },
            checkMessages: function(){
                if(this.newPost.body == undefined || this.newPost.body == '')
                    this.hasText = true
                else
                    this.hasText = false
            },
            addPost: function() {
                this.resource.save(this.newPost)
            },
            getAllPosts: function() {
                this.resource.get().then(function(response){
                    console.log(response)
                    this.posts = response.data
                    this.countposts = response.data.length
                }, function(error) {

                })
            },
            getSinglePost: function() {
                this.resource.get({id: this.idForSearch}).then(function(response){
                    this.post = response.data
                    this.hasPost = true
                }, function(error) {
                    this.hasPost = false
                    "id is not correct"
                })
            },
            deletePost: function() {
                this.resource.delete({id: this.idForDelete}).then(function(response){
                    console.log(response)
                    if(response.status == 200)
                        this.deletedPost = true
                }, function(error) {
                    this.deletedPost = false
                    "id is not correct"
                })
            }
        },
        created: function() {
            this.getAllPosts();
            this.getSinglePost()
        }
    }
</script>

<style scoped>
.count {
    margin: 0 10% 20px;
    text-align: left;
}
.md-tabs {
    margin-bottom: 24px;
}
.md-tabs-container {
    min-height: 600px !important;
}
.md-field {
    align-items: center;
    width: 20%;
    margin: 0 auto;
}
.mb20px {
    margin-bottom: 20px;
}
.md-button {
    margin-top: 25px;
}
.jsonpost {
    background: #efe;
}
.title {
    padding: 30px;
    font-size: 40px !important;
}
h2 {
    font-size: 20px;
    color: #485663;
    display: block;
    text-align: left;
    width: 590px;
    margin: 0 0 15px;
}
.post {
    color: #485663;
    width: 80%;
    border: 1px solid #e4e4e4;
    border-radius: 2px;
    padding: 18px 20px;
    margin-bottom: 20px;
    margin-left: 10%;
    position: relative;
    overflow: hidden;
    min-height: 125px;
}
.post span {
    font-size: 160px;
    opacity: .5;
    position: absolute;
    font-family: Helvetica Neue, sans-serif;
    right: -5px;
    bottom: -20px;
    color: #ccc;
    margin: 0;
    padding: 0;
    z-index: 0;
    font-weight: 600;
    display: block;
    line-height: 160px;
}
.post h3 {
    font-size: 16px;
    margin: 0 0 6px;
    position: relative;
    z-index: 2;
}
.post p {
    font-size: 13px;
    position: relative;
    z-index: 2;
}

.main-raised {
    margin: 0px 30px 0px;
    padding-top: 25px;
    border-radius: 6px;
    -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}
.main {
    background: #FFFFFF;
    position: relative;
    z-index: 3;
}
</style>
