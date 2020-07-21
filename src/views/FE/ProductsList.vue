<template>
  <div>
    <loading :active.sync="isLoading"> </loading>
    <div class="container">
      <div
        class="btn-group d-flex w-100 mt-4 ml-auto mr-auto"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          class="btn btn-outline-secondary pdlist"
          v-for="cate in productCategories"
          @click="selectcategory(cate)"
          :key="cate.item"
        >
          {{ cate }}
        </button>
      </div>

      <div class="row mt-4">
        <div class="col-md-4 mb-4" v-for="item in pgpd" :key="item.id">
          <div class="card border-0 shadow-sm">
            <div
              style="height: 230px; background-size: cover; background-position: center"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <div class="card-body">
              <span class="badge badge-secondary float-right ml-2">{{
                item.category
              }}</span>
              <h5 class="card-title">
                <a
                  href="#"
                  class=" text-dark bg-warning p-2 font-weight-bold"
                  style="border-radius:15px;font-size:15px;"
                  >{{ item.title }}</a
                >
              </h5>
              <p class="card-text">{{ item.content }}</p>
              <div class="d-flex justify-content-between align-items-baseline">
                <!-- <div class="h5">2,800 元</div> -->
                <del class="h6 text-secondary" v-if="!item.price">{{
                  item.origin_price
                }}</del>
                <del class="h6 text-secondary" v-if="item.price"
                  >原價: {{ item.origin_price }}</del
                >
                <div class="h5 text-danger" v-if="item.price">
                  特價: {{ item.price }}
                </div>
              </div>
            </div>
            <div class="card-footer d-flex">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="getproduct(item.id)"
              >
                <i
                  class="fas fa-spinner fa-spin"
                  v-if="status.fileUploading"
                ></i>
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-auto"
                @click="addtoCart(item.id)"
              >
                <i
                  class="fas fa-spinner fa-spin"
                  v-if="status.fileUploading"
                ></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="h5">單一商品modal</div> -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5
              class="modal-title  text-light font-weight-bold"
              id="exampleModalLabel"
            >
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6" v-if="product.price"
                >原價: {{ product.origin_price }} 元</del
              >
              <div class="h4 text-danger font-weight-bold" v-if="product.price">
                現在只要: {{ product.price }} 元
              </div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price || 0 }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="addtocartLoading"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !pagination.hasPre }">
          <a
            class="page-link"
            href="#"
            @click.prevent="getproducts2(pagination.currentPage - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in pagination.pageTotal"
          :key="page"
          :class="{ active: pagination.currentPage == page }"
        >
          <a class="page-link" href="#" @click.prevent="getproducts2(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pagination.hasPost }">
          <a
            class="page-link"
            href="#"
            @click.prevent="getproducts2(pagination.currentPage + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
import Alert from '@/components/AlertMessage'
export default {
  Alert,
  data () {
    return {
      productCategories: [
        '全部商品',
        '客製化專區',
        '高品質素T',
        '專業服飾修改'
      ],
      cateProduct: [],
      products: [],
      customerpd: [],
      product: {},
      addtocartLoading: false,
      isLoading: false,
      cart: { carts: {} },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          adress: ''
        },
        message: ''
      },
      status: {
        fileUploading: false
      },
      pagination: {
        totalLength: '',
        maxItem: '',
        minItem: '',
        currentPage: 2,
        dataPerPage: 8,
        pageTotal: '',
        hasPre: true,
        hasPost: true
      },
      pgpd: []
    }
  },
  methods: {
    getproducts2 (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.pagination.currentPage = page
      vm.isLoading = true
      this.$http.get(api).then(response => {
        vm.isLoading = false
        vm.cateProduct = vm.pgpd = vm.products = response.data.products
        vm.pgpd = []
        vm.paginationPage()
      })
    },
    paginationPage (page = 1) {
      const vm = this
      vm.pagination.maxItem =
        vm.pagination.dataPerPage * vm.pagination.currentPage
      vm.pagination.minItem =
        vm.pagination.dataPerPage * vm.pagination.currentPage -
        vm.pagination.dataPerPage +
        1
      vm.pagination.totalLength = vm.cateProduct.length
      vm.pagination.pageTotal = Math.ceil(
        vm.pagination.totalLength / vm.pagination.dataPerPage
      )
      if (vm.pagination.pageTotal < vm.pagination.currentPage) {
        vm.pagination.currentPage = 1
        vm.pagination.maxItem =
          vm.pagination.dataPerPage * vm.pagination.currentPage
        vm.pagination.minItem =
          vm.pagination.dataPerPage * vm.pagination.currentPage -
          vm.pagination.dataPerPage +
          1
      }
      if (vm.pagination.currentPage === 1) {
        vm.pagination.hasPre = false
      } else if (vm.pagination.currentPage === vm.pagination.pageTotal) {
        vm.pagination.hasPost = false
      } else {
        vm.pagination.hasPre = true
        vm.pagination.hasPost = true
      }

      vm.cateProduct.forEach(function (item, i) {
        const itemNum = i + 1
        if (
          itemNum >= vm.pagination.minItem &&
          itemNum <= vm.pagination.maxItem
        ) {
          vm.pgpd.push(item)
        }
      })
    },
    selectcategory (cate) {
      const vm = this
      if (cate === '全部商品') {
        this.getproducts2()
      } else {
        vm.pgpd = []
        vm.cateProduct = vm.products.filter(item => {
          return item.category === cate
        })
        console.log(vm.cateProduct)
        vm.paginationPage()
      }
    },
    addtoCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      const cart = {
        product_id: id,
        qty
      }
      vm.status.fileUploading = true
      vm.addtocartLoading = true
      this.$http.post(api, { data: cart }).then(response => {
        vm.getCart()
        $('#productModal').modal('hide')
        vm.status.fileUploading = false
        vm.addtocartLoading = false
        vm.$bus.$emit('message:push', '加入成功', 'warning')
      })
    },
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then(response => {
        vm.cart = response.data.data
        vm.$bus.$emit('CartNum', vm.cart)
        vm.isLoading = false
      })
    },
    getproduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      const vm = this
      vm.status.fileUploading = true
      this.$http.get(api).then(response => {
        vm.product = response.data.product
        $('#productModal').modal('show')
        vm.status.fileUploading = false
      })
    },
    removeCartItem (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const vm = this
      vm.isLoading = true
      this.$http.delete(api).then(() => {
        vm.getCart()
        vm.isLoading = false
      })
    }
  },
  created () {
    this.getCart()
    this.getproducts2()
  }
}
</script>

<style lang="scss">
.cartlength {
  position: absolute;
  background-color: red;
  padding: 2px;
  color: white;
  border-radius: 50%;
  width: 30px;
  top: 0;
  left: 0;
}
</style>
