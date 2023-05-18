<template>
    <div class="statbox widget box box-shadow">
        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Thêm mới sản phẩm</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitForm">
                <div class="row">
                    <!-- <div class="col-xl-12 col-lg-12 col-sm-12"> -->
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <div class="form-group">
                            <label for="exampleFormControlInput1"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Mã sản phẩm</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="code" placeholder="" v-model="product.Code"
                                    :class="{ error: codeError.status, success: codeSuccess.status }" />
                                <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                                <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                                </p>
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Tên sản phẩm</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="" v-model="product.ProductName"
                                    :class="{ error: nameError.status, success: nameSuccess.status }">
                                <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                                <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}
                                </p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="hPassword"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Mô tả</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <textarea style="width: 100%;" name="" id="description" cols="50" rows="10"
                                    placeholder="Click..." v-model="product.Description"
                                    :class="{ error: descriptionError.status, success: descriptionSuccess.status }">

                        </textarea>
                                <p class="text-error" v-if="descriptionError.status">{{ descriptionError.text }}</p>
                                <p class="success-text" v-if="descriptionSuccess.status">{{ descriptionSuccess.text }}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class="col-xl-6 col-lg-6 col-sm-6">

                        <div class="form-group">
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Giá sản phẩm</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="price" placeholder=""
                                    v-model="product.Price"
                                    :class="{ error: priceError.status, success: priceSuccess.status }">
                                <p class="text-error" v-if="priceError.status">{{ priceError.text }}</p>
                                <p class="success-text" v-if="priceSuccess.status">{{ priceSuccess.text }}
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="hPassword"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Giá khuyến mãi</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="salePrice" placeholder=""
                                    v-model="product.SalePrice"
                                    :class="{ error: salePriceError.status, success: salePriceSuccess.status }">
                                <p class="text-error" v-if="salePriceError.status">{{ salePriceError.text }}</p>
                                <p class="success-text" v-if="salePriceSuccess.status">{{ salePriceSuccess.text }}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12" style="display: flex;">
                                <div class="col-lg-6" style="padding: 0;">
                                    <div class="form-group">
                                        <label for="hPassword"
                                            class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Danh mục</label>
                                        <div class="col-xl-12 col-lg-12 col-sm-12">
                                            <select class="form-control basic" name="" id="categoryId"
                                                v-model="product.CategoryId">
                                                <option value="">Chọn</option>
                                                <option v-for="item in categorys" :key="item._id"
                                                    :selected="product.CategoryId === item._id" v-bind:value="item._id">{{
                                                        item.CategoryName
                                                    }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Images</label>
                            <div class="col-4" style="margin-left: 20px;">
                                <p class="btn btn-success btn-sm" @click="$refs.file.click()">
                                    Chọn file ảnh
                                </p>
                            </div>
                            <div class="col-8">
                                <label class="btn btn-default p-0">
                                    <input type="file" accept="images/*" ref="file" name="file" @change="selectImage"
                                        :hidden="true" />
                                </label>
                            </div>
                            <div class="col-xl-10 col-lg-9 col-sm-10">
                                <img v-if="url" :src="url"
                                    style="width: 300px; height: 250px; margin-left: 37%;margin-top: -20%;" />
                            </div>
                        </div>

                    </div>

                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary mt-3">Lưu</button>
                        </div>
                    </div>
                    <!-- </div> -->

                </div>
            </form>
        </div>
    </div>
</template>

<script>
import ProductService from '../../services/ProductServices';
import CategoryProductService from '../../services/CategoryServices';
import UploadService from "../../services/UploadService";
export default {
    data() {
        return {
            message: "",
            currentImage: undefined,
            categorys: null,
            url: null,
            ID: null,
            product: {
                _id: "",
                Code: "",
                ProductName: "",
                CategoryId: "",
                CategoryName:"",
                Description: "",
                Price: "",
                SalePrice: "",
                Image: "",
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
            descriptionError: {
                text: "",
                status: false,
            },
            descriptionSuccess: {
                text: "",
                status: false,
            },
            priceError: {
                text: "",
                status: false,
            },
            priceSuccess: {
                text: "",
                status: false,
            },
            salePriceError: {
                text: "",
                status: false,
            },
            salePriceSuccess: {
                text: "",
                status: false,
            },
            quantityError: {
                text: "",
                status: false,
            },
            quantitySuccess: {
                text: "",
                status: false,
            },
            categoryIdError: {
                text: "",
                status: false,
            },
            categoryIdSuccess: {
                text: "",
                status: false,
            },
            imagesError: {
                text: "",
                status: false,
            },
            imagesSuccess: {
                text: "",
                status: false,
            },
        }
    },
    mounted() {
        CategoryProductService.getAll()
            .then((res) => {
                this.categorys = res.data;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
            })
    },
    methods: {
        onSubmitForm() {
            if (this.product.Code.length == 0) {
                this.codeError = {
                    text: "Mã sản phẩm không được để trống!",
                    status: true
                };
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.Code.length > 10) {
                this.codeError = {
                    text: "Mã sản phẩm không phép quá 10 kí tự",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.Code.length < 10) {
                this.codeSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.codeError = {
                    text: "",
                    status: false
                }
            } else {
                this.codeSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.product.ProductName.length == 0) {
                this.nameError = {
                    text: "Tên sản phẩm không được để trống!",
                    status: true
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            }  else if (this.product.ProductName.length > 0 ) {
                this.nameSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.nameError = {
                    text: "",
                    status: false
                }
            } else {
                this.nameSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.product.Description.length == 0) {
                this.descriptionError = {
                    text: "Mô tả không được để trống",
                    status: true
                };
                this.descriptionSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.Description.length > 0) {
                this.descriptionSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.descriptionError = {
                    text: "",
                    status: false
                }
            } else {
                this.descriptionSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.product.Price.length == 0) {
                this.priceError = {
                    text: "Giá tiền không được để trống",
                    status: true
                };
                this.priceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.Price.length > 0) {
                this.priceSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.priceError = {
                    text: "",
                    status: false
                }
            } else {
                this.priceSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.product.SalePrice.length == 0) {
                this.salePriceError = {
                    text: "Giá khuyến mãi không được để trống!!",
                    status: true
                };
                this.salePriceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.SalePrice.length > 0) {
                this.salePriceSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.salePriceError = {
                    text: "",
                    status: false
                }
            } else {
                this.salePriceSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.product.CategoryId == 0) {
                this.categoryIdError = {
                    text: "Tên danh mục không được để trống",
                    status: true
                };
                this.categoryIdSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.CategoryId > 0) {
                this.categoryIdSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.categoryIdError = {
                    text: "",
                    status: false
                }
            } else {
                this.categoryIdSuccess = {
                    text: "",
                    status: true
                }
            }
            if (this.product.Image.length == 0) {
                this.imagesError = {
                    text: "Ảnh không được để trống!",
                    status: true
                };
                this.imagesSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.product.Image.length > 0) {
                this.imagesSuccess = {
                    text: "Thành công!",
                    status: true
                }
                this.imagesError = {
                    text: "",
                    status: false
                }
            } else {
                this.imagesSuccess = {
                    text: "",
                    status: true
                }
            }
          
                if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.descriptionSuccess.status == true && this.salePriceSuccess.status == true && this.priceSuccess.status == true  && this.imagesSuccess.status == true) {
                    UploadService.upload(this.currentImage)
                        .then((response) => {
                            console.log(response);
                            this.message = response.data.message;
                        })
                        .catch((err) => {
                            this.message = "Unable to load image  ! " + err;
                            this.currentImage = undefined;
                        });
                    ProductService.create(this.product)
                        .then((res) => {
                            //Perform Success Action 
                            this.ID = res.data._id;
                            this.product._id = this.ID;
                            this.product.Status = 1;
                            this.product.CategoryName = res.data.CategoryName,
                            console.log(this.product);
                            this.$emit("ShowData", this.product);
                        })
                        .catch((error) => {
                            // error.response.status Check status code
                            console.log(error);
                        })
                        .finally(() => {
                            //Perform action in always
                        });
                }
           
        },
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.url = URL.createObjectURL(this.currentImage);
            this.product.Image = this.$refs.file.files.item(0).name;
            console.log(this.currentImage);
        },
    }
}
</script>