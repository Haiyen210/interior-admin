<template>
    <div class="statbox widget box box-shadow">

        <div class="widget-header">
            <div class="row">
                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                    <h4>Sửa sản phẩm</h4>
                </div>
            </div>
        </div>
        <div class="widget-content widget-content-area">
            <form method="post" v-on:submit.prevent="onSubmitEditForm" v-if="products">
                <input type="hidden" v-model="products._id">
                <div class="row">
                    <!-- <div class="col-xl-12 col-lg-12 col-sm-12"> -->
                    <div class="col-xl-6 col-lg-6 col-sm-6">
                        <div class="form-group">
                            <label for="exampleFormControlInput1"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Mã sản phẩm</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="code" placeholder="" v-model="products.Code"
                                    :class="{ error: codeError.status, success: codeSuccess.status }" />
                                <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                                <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}
                                </p>
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Tên sản phẩm</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="" v-model="products.ProductName"
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
                                    placeholder="Click..." v-model="products.Description"
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
                            <label for="hPassword" class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Giá tiền</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="price" placeholder=""
                                    v-model="products.Price"
                                    :class="{ error: priceError.status, success: priceSuccess.status }">
                                <p class="text-error" v-if="priceError.status">{{ priceError.text }}</p>
                                <p class="success-text" v-if="priceSuccess.status">{{ priceSuccess.text }}
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="hPassword"
                                class="col-xl-12 col-sm-12 col-sm-12 col-form-label">Giá khuyến mại</label>
                            <div class="col-xl-12 col-lg-12 col-sm-12">
                                <input type="text" class="form-control" id="salePrice" placeholder=""
                                    v-model="products.SalePrice"
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
                                            <select class="form-control basic" name="" id="CategoryId"
                                                v-model="products.CategoryId">
                                                <option value="">Chọn</option>
                                                <option v-for="item in categorys" :key="item._id"
                                                    :selected="products.CategoryId === item._id" v-bind:value="item._id">
                                                    {{
                                                        item.CategoryName
                                                    }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <fieldset class="form-group mb-4" style="margin-left: 15px;    margin-top: 10px;">
                            <div class="row">
                                <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Status</label>
                                <div class="col-xl-10 col-lg-9 col-sm-10" style="display:flex">
                                    <div class="form-check" style="margin-right: 50px;">
                                        <input class="form-check-input" type="radio" v-model="products.Status"
                                            :value="1" :checked="products.Status === 1" id="status"
                                            style="width: 16px;height: 16px;" />
                                        <label class="form-check-label" for="flexCheckDefault"> Còn hàng
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" v-model="products.Status"
                                            :value="0" :checked="products.Status === 0" id="status"
                                            style="width: 16px;height: 16px;" />
                                        <label class="form-check-label" for="flexCheckChecked"> Hết hàng </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group">
                            <label class="col-form-label col-xl-2 col-sm-3 col-sm-2 pt-0">Ảnh</label>
                            <div class="col-4" style="margin-left: 20px;">
                                <p class="btn btn-success btn-sm" @click="$refs.file.click()">
                                    Chọn file ảnh
                                </p>
                            </div>
                            <div class="col-8">
                                <label class="btn btn-default p-0">
                                    <input type="file" accept="image/*" name="file" ref="file" @change="selectImage"
                                        :hidden="true" />
                                </label>
                            </div>
                            <div class="col-xl-10 col-lg-9 col-sm-10">
                                <img :src="'http://localhost:21011/public/images/' + products.images"
                                    style="width: 300px; height: 250px; margin-left: 37%;margin-top: -20%;"
                                    v-if="ishowImage == false" />
                                <img v-bind:src="url"
                                    style="width: 300px; height: 250px; margin-left: 37%;margin-top: -20%;"
                                    v-if="ishowImage == true" />
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
    props: ['product'],
    data() {
        return {
            products: this.product,
            url: null,
            ishowImage: false,
            categorys: null,
            message: "",
            old: "http://localhost:21011/public/images/" + this.product.Image,
            currentImage: undefined,
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
            wareHouseIDError: {
                text: "",
                status: false,
            },
            wareHouseIDSuccess: {
                text: "",
                status: false,
            }
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
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.url = URL.createObjectURL(this.currentImage);
            this.products.Image = this.$refs.file.files.item(0).name;
            this.ishowImage = true;
        },
        onSubmitEditForm() {
             if (this.products.Code.length == 0) {
                this.codeError = {
                    text: "Mã sản phẩm không được để trống!",
                    status: true
                };
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.Code.length > 10) {
                this.codeError = {
                    text: "Mã sản phẩm không phép quá 10 kí tự",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.Code.length < 10) {
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
            if (this.products.ProductName.length == 0) {
                this.nameError = {
                    text: "Tên sản phẩm không được để trống!",
                    status: true
                };
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            }  else if (this.products.ProductName.length > 0 ) {
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
            if (this.products.Description.length == 0) {
                this.descriptionError = {
                    text: "Mô tả không được để trống",
                    status: true
                };
                this.descriptionSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.Description.length > 0) {
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
            if (this.products.Price.length == 0) {
                this.priceError = {
                    text: "Giá tiền không được để trống",
                    status: true
                };
                this.priceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.Price.length > 0) {
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
            if (this.products.SalePrice.length == 0) {
                this.salePriceError = {
                    text: "Giá khuyến mãi không được để trống!!",
                    status: true
                };
                this.salePriceSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.SalePrice.length > 0) {
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
            if (this.products.CategoryId == 0) {
                this.categoryIdError = {
                    text: "Tên danh mục không được để trống",
                    status: true
                };
                this.categoryIdSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.CategoryId > 0) {
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
            if (this.products.Image.length == 0) {
                this.imagesError = {
                    text: "Ảnh không được để trống!",
                    status: true
                };
                this.imagesSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.products.Image.length > 0) {
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
          
            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.descriptionSuccess.status == true && this.salePriceSuccess.status == true && this.priceSuccess.status == true&& this.imagesSuccess.status == true) {
                    UploadService.upload(this.currentImage)
                        .then((response) => {
                            console.log();
                            this.message = response.data.message;
                        })
                        .catch((err) => {
                            this.message = "Unable to load image  ! " + err;
                            this.currentImage = undefined;
                        });
                    ProductService.update(this.products)
                        .then((res) => {
                            console.log(res);
                            this.products.CategoryName = res.data.CategoryName;
                            this.$emit("ShowEditData", this.products);
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