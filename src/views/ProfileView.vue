<script>
import { inject } from 'vue'
import axios from 'axios'
import { UserService } from '../services/UserService.ts'

const userService = new UserService()

export default {
  
  data() {
    return {
      orgProfile : {
        id : '',
        name : '',
        teamName : '',
        email : '',
        mobile : ''
      },
      profile : {
        id : '',
        name : '',
        teamName : '',
        email : '',
        mobile : ''
      },
      password : '',
      reenterPassword : '',
      modifyMode : false,
    }
  },  
  mounted() {
    this.fetchData();
  },
  methods : {
      fetchData() {
          userService.getUser('11111111')
          .then(res =>  {
            if(res.data.code === '200') {
              this.orgProfile = res.data.data
              // 객체를 복사함. this.orgProfile로 직접 assign하면 객체 참조가 됨.
              this.profile = {...this.orgProfile}
            } else {
              console.log("error code : "  + res.data.code)
            }
          }) 
          .catch(function(error) {
            console.log(error)
          });
      },
      onModifyClick() {
        this.modifyMode = true
      },
      onSubmit(event) {
        event.preventDefault()

        if(JSON.stringify(this.profile) === JSON.stringify(this.orgProfile) && this.password === '') {
          this.modifyMode = false
          return
        }

        const entity = {id:this.profile.id,
          name:this.profile.name,
          mobile:this.profile.mobile,
          email:this.profile.email,
          password: this.password !== ''?this.password:undefined,}

        userService.putUser(entity)
        .then(res=>{
          if(res.data.code === '200') {       
            this.fetchData()
            this.password = ''
            this.reenterPassword = ''
          } else {
            console.log("error code : "  + res.data.code)
          }
        })
        .catch(function(error) {
          console.log(error)
        });

        this.modifyMode = false
      },
      onCancelClick() {
        this.profile = {...this.orgProfile}
        this.password = ''
        this.reenterPassword = ''
        this.modifyMode = false;
      },
    },
    computed: {
      nameIsValid() {
        return !this.modifyMode || !!this.profile.name
      },
      emailIsValid() {
        return !this.modifyMode || !!this.profile.email
      },
      mobileIsValid() {
        return !this.modifyMode || !!this.profile.mobile
      },
      passwordIsValid() {
        return !this.modifyMode || (this.password === this.reenterPassword)
      },
      formIsValid() {
        return this.nameIsValid && this.emailIsValid && this.mobileIsValid && this.passwordIsValid
      }
    }
  }

</script>

<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <!-- 프로필 사진 -->
      <div class="col-md-4" >
        <div class="row-9 mt-3">
          <img class="border border-1" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw">
        </div>
        <div class="row-3 mt-3">
          <button type="button" class="btn btn-primary">사진변경</button>
        </div>
      </div>

      <!-- 사용자 정보-->
      <form class="col-md-4"  @submit="onSubmit" novalidate>
        <div class="row">
          <div class="col-12 mt-4 mb-4">
            <div class="input-group">
              <span class = "input-group-text justify-content-center col-4">아이디</span>
              <input type="text" class="form-control no-select" v-model="profile.id" disabled>
            </div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <span class = "input-group-text justify-content-center col-4" >이름</span>
              <input type="text" class="form-control" id="name" v-bind:class="{'no-select' : !modifyMode}" v-model="profile.name">              
            </div>
            <div class="col-12 justify-content-center" style="height: 1.5rem">
              <div class="text-danger small" v-if="!nameIsValid" >이름을 입력해 주세요.</div> 
            </div>
          </div>
          <div class="col-12 mb-4">
            <div class="input-group">
              <span class = "input-group-text justify-content-center col-4" >팀</span>
              <input type="text" class="form-control no-select"  v-model="profile.teamName" disabled>
            </div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <span class = "input-group-text justify-content-center col-4" >이메일</span>
              <input type="email" class="form-control" id="email" v-bind:class="{'no-select' : !modifyMode}" v-model="profile.email">
            </div>
            <div class="col-12 justify-content-center" style="height: 1.5rem">
              <div class="text-danger small" v-if="!emailIsValid" >이메일을 입력해 주세요.</div> 
            </div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <span class = "input-group-text justify-content-center col-4" >전화번호</span>
              <input type="text" class="form-control" id="mobile" v-bind:class="{'no-select' : !modifyMode}" v-model="profile.mobile">
            </div>
            <div class="col-12 justify-content-center" style="height: 1.5rem">
              <div class="text-danger small" v-if="!mobileIsValid">전화번호를 입력해 주세요.</div> 
            </div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <span class = "input-group-text justify-content-center col-4" v-bind:class="{'d-none' : !modifyMode}" >비밀번호</span>
              <input type="password" class="form-control" id="password"  v-bind:class="{'d-none' : !modifyMode}" v-model="password">
            </div>
            <div class="col-12 justify-content-center" style="height: 1.5rem" v-bind:class="{'d-none' : !modifyMode}"></div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <span class = "input-group-text justify-content-center col-4" v-bind:class="{'d-none' : !modifyMode}">비밀번호확인</span>
              <input type="password" class="form-control" id="reenterPassword" v-bind:class="{'d-none' : !modifyMode}" v-model="reenterPassword">
            </div>
            <div class="col-12 justify-content-center" style="height: 1.5rem" v-bind:class="{'d-none' : !modifyMode}">
              <div class="text-danger small" v-if="!passwordIsValid">비밀번호가 다릅니다.</div> 
            </div>
          </div>
        </div>        
        <div>
          <button id="modify" type="button" class="btn btn-primary m-3 mt-0" v-bind:class="{'d-none' : modifyMode}" @click="onModifyClick">정보수정</button>
          <button id="confirm" type="submit" class="btn btn-primary m-3 mt-0" v-bind:class="{'d-none' : !modifyMode}" :disabled="!formIsValid">완료</button>
          <button id="cancel" type="button" class="btn btn-primary m-3 mt-0" v-bind:class="{'d-none' : !modifyMode}" @click="onCancelClick">취소</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style>
.no-select {
  pointer-events: none;
}

input[type="text"]:disabled {
  background: #eeeeee;
}

span.input-group-text {
  background-color:rgba(49, 108, 244, 0.7);
  color:white;
}
</style>