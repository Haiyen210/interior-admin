<template>

    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Thêm mới vai trò</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="form-group row mb-4">
                    <label for="exampleFormControlInput1" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Mã vai trò</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="code" placeholder="" v-model="role.Code"
                            :class="{ error: codeError.status, success: codeSuccess.status }" />
                        <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                        <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                        </p>
                    </div>

                </div>
                <div class="form-group row mb-4">
                    <label for="hPassword" class="col-xl-2 col-sm-3 col-sm-2 col-form-label">Tên vai trò</label>
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="" v-model="role.Name"
                            :class="{ error: nameError.status, success: nameSuccess.status }">
                        <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                        <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                        </p>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary mt-3">Lưu</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>
<style >
.add-new{
        padding-top: 28px;
}
</style>
<script>
import RoleServices from "../../services/RoleServices";
// import 'mosha-vue-toastify/dist/style.css';
// import { createToast } from 'mosha-vue-toastify';
export default {
    data() {
        return {
            message: "",
            currentImage: undefined,
           a:null,
            url: null,
            ID: null,
            role: {
                _id: "",
                Code: "",
                Name: "",
                Status: 1
            },
            codeError: {
                text: "",
                status: false,
            },
            codeSuccess: {
                text: "",
                status: false,
            },
            nameError: {
                text: "",
                status: false,
            },
            nameSuccess: {
                text: "",
                status: false,
            },
           
        }
    },
    mounted(){
        RoleServices.getAll().then((res)=>{
            this.a = res.data
        })
    },
    methods: {
        onSubmitForm() {
            var codeSame;
            for (let i = 0; i < this.a.length; i++) {
                const element = this.a[i];
                if(this.role.Code == element.Code){
                    codeSame = element.Code;
                    break;
                }
            }
            if (this.role.Code.length == 0) {
                this.codeError = {
                    text: "Mã vai trò không được để trống!",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.role.Code.length > 10) {
                this.codeError = {
                    text: "Mã vai trò chỉ tối đa 10 kí tự",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if(this.role.Code == codeSame)
            {
                this.codeError = {
                    text: "Mã danh mục "+this.role.Code+" này đã tồn tại!",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            }else if (this.role.Code.length < 10 || this.role.Code != codeSame) {
                this.codeSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.codeError = {
                    text: "",
                    status: false
                }
            } else {
                this.codeError = {
                    text: "",
                    status: false
                }
            }
            if (this.role.Name.length == 0) {
                this.nameError = {
                    text: "Tên vai trò không được để trống!",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.role.Name.length < 5 || this.role.Name.length > 50) {
                this.nameError = {
                    text: "Tên vai trò ít nhất từ 6 kí tự đến 50 kí tự",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.role.Name.length > 5 || this.role.Name.length < 50) {
                this.nameSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.nameError = {
                    text: "",
                    status: false
                }
            } else {
                this.nameError = {
                    text: "",
                    status: false
                }
            }
           
            if (this.codeSuccess.status == true && this.nameSuccess.status == true) {
                RoleServices.create(this.role)
                    .then((res) => {
                        //Perform Success Action
                         
                        this.ID = res.data._id;
                        this.role._id = this.ID;
                        this.role.Status = 1;
                        this.$emit("ShowData", this.role);
                    })
                    .catch((error) => {
                        // error.response.status Check status code
                        console.log(error);
                    })
                    .finally(() => {
                        //Perform action in always
                    });
                } 
        }
    }
}
</script>