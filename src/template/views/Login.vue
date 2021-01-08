<template>
    <h2 class="page-title">Login to Your Account</h2>
    <div class="bgbx pagebx login">
        <div class="input-group">
            <h4 class="field-name">User Name</h4>
            <input
                type="text"
                class="input text"
                v-model="email"
                @keydown.enter.prevent="$refs.pwdInput.focus()"
            >
        </div>
        <div class="input-group">
            <h4 class="field-name">Password</h4>
            <input
                type="password"
                class="input text"
                v-model="password"
                ref="pwdInput"
                @keydown.enter="submit"
            />
        </div>
        <div class="input-group">
            <p class="error-msg" v-if="errorMsg">{{errorMsg}}</p>
        </div>
        <div class="input-group submit">
            <button
                class="bt big submit"
                type="button"
                @click="submit"
                v-loader="loading"
            >Login</button>
        </div>
    </div>
    <div class="users" v-if="users" :class="{show: showUsers}">
        <div class="open-bt" @click="showUsers = !showUsers">
            Select User
        </div>
        <div class="users-wrapper">
            <div
                class="user"
                v-for="(user,i) in users"
                :key="i"
                @click="selectUser(user)"
            >
                {{ user.username }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return {
                email: '',
                password: '',
                errorMsg: null,
                loading: false,
                showUsers: false
            }
        },
        computed:{
            users(){
                return this.$store.getters['data/users'].map(u=> ({
                    username: u.email,
                    password: u.password
                }))
            }
        },
        methods:{
            submit(){
                const {email,password} = this
                if(email && password && !this.errorMsg){
                    this.loading = true
                    this.$store.dispatch('data/login',{
                        email, password
                    }).then(r=>{
                        if(r.status == 200){
                            this.$router.push('/')
                        }
                    }).catch(e=>{
                        this.showError(e.message || 'Something went wrong!')
                    }).finally(()=>this.loading = false)
                }else this.showError('Please fill all the fields in the required format')
            },
            showError(m){
                this.errorMsg = m
                setTimeout(function(){
                    this.errorMsg = null
                }.bind(this),1200)
            },
            selectUser(user){
                this.email = user.username
                this.password = user.password
                this.showUsers = false
            }
        },
        created(){
            console.log("AVAILABLE USERS")
            console.log(this.users)
        }
    }
</script>

<style src="~v/login.scss" lang="scss" scoped></style>