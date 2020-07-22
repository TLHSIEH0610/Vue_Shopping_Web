<template>
  <div>
    <div class="py-1 ">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul
              class="navbar-nav  px-3 ml-auto d-flex flex-row justify-content-end"
            >
              <li class="nav-item text-nowrap mr-2">
                <router-link
                  class="nav-link mr-2 text-dark"
                  to="/login"
                  v-if="!loginstatus"
                  >登入</router-link
                >
              </li>
              <li class="nav-item text-nowrap">
                <a
                  class="nav-link mr-3 text-dark"
                  v-if="loginstatus"
                  href="#"
                  @click.prevent="signout"
                  >登出</a
                >
              </li>
              <li class="nav-item mr-3">
                <router-link
                  to="/admin/ProductsManagement"
                  class="nav-link  text-dark"
                  v-if="loginstatus"
                  >產品列表</router-link
                >
              </li>
              <li class="nav-item mr-3">
                <router-link
                  to="/admin/OrderManagement"
                  class="nav-link text-dark"
                  v-if="loginstatus"
                  >訂單列表</router-link
                >
              </li>
              <li class="nav-item mr-3">
                <router-link
                  to="/admin/coupon"
                  class="nav-link text-dark"
                  v-if="loginstatus"
                  >優惠管理</router-link
                >
              </li>
              <a
                type="button"
                class="btn btn-warning btn-sm favoriate"
                href="javascript:void(0)"
                >加入我的最愛</a
              >
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <router-link to="/" class="navbar-brand" href="#">
          <img class="logo" src="@/assets/e_painter2.png" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active" @click="GetUrl()">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item active" v-if="currentURL">
              <a class="nav-link text-danger" href="#promo">優惠代碼</a>
            </li>
            <li class="nav-item active" @click="GetUrl()">
              <router-link class="nav-link" to="/ProductsList"
                >商品列表</router-link
              >
            </li>
            <li class="nav-item active" @click="GetUrl()">
              <router-link to="/Tech" class="nav-link" href="#"
                >特殊技術</router-link
              >
            </li>
            <li class="nav-item active" @click="GetUrl()">
              <router-link to="/About" class="nav-link" href="#"
                >關於我們</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!--購物車-->
      <div class="cart ml-auto dropdown">
        <button
          class="btn dropdown-toggle btn-cart"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-cart-arrow-down fa-2x bg-white p-2"></i>
          <p class="cartlength">{{ cartlength }}</p>
        </button>
        <div
          class="dropdown-menu dropdown-menu-right cartmenu"
          aria-labelledby="dropdownMenuLink"
        >
          <form class="px-4 py-3">
            <div v-if="cartlength > 0">
              <table class="table table-hover">
                <thead class="table-info">
                  <th></th>
                  <th>品名</th>
                  <th width="80">數量</th>
                  <th>單價</th>
                </thead>
                <tbody>
                  <tr
                    v-for="item in cart.carts"
                    :key="item.id"
                  >
                    <td class="align-middle">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="removeCartItem(item.id)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="align-middle">
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </td>
                    <td class="align-middle">
                      {{ item.qty }}/{{ item.product.unit }}
                    </td>
                    <td class="align-middle text-right">
                      {{ item.final_total }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">{{ cart.total }}</td>
                  </tr>
                  <tr v-if="cart.final_total !== cart.total">
                    <td colspan="3" class="text-right text-success">
                      折扣價
                    </td>
                    <td class="text-right text-success">
                      {{ cart.final_total }}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div class="mt-2  d-flex justify-content-center">
                <router-link
                  class="btn btn-danger"
                  style="width:200px; margin: 0,auto;"
                  to="/customer_payment"
                >
                  結帳
                </router-link>
              </div>
            </div>
            <span v-else>目前無商品</span>
          </form>
        </div>
      </div>
    </nav>
    <Alert></Alert>
  </div>
</template>

<script>
import Alert from './AlertMessage'
export default {
  name: 'Navbar',
  components: {
    Alert
  },
  data () {
    return {
      currentURL: true,
      cart: {
        carts: {}
      },
      cartlength: '',
      pageTitle: '新竹印衣服',
      pageURL: 'https://github.com/TLHSIEH0610/Vue-Practice',
      loginstatus: ''
    }
  },
  methods: {
    signout () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/logout`
      this.$http.post(url).then(response => {
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    },
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then(response => {
        vm.cart = response.data.data
        vm.cartlength = response.data.data.carts.length
        vm.isLoading = false
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
    },
    signinCheck () {
      const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
      const vm = this
      this.$http.post(api).then(response => {
        vm.loginstatus = response.data.success
      })
    },
    GetUrl () {
      if (this.$route.path !== '/') {
        this.currentURL = false
      } else {
        this.currentURL = true
      }
    },
    receive (cartdata) {
      this.cart = cartdata
      this.cartlength = cartdata.carts.length
    }
  },
  created () {
    this.getCart()
    this.signinCheck()
    this.GetUrl()
    this.$bus.$on('CartNum', cartdata => {
      this.receive(cartdata)
    })
  }
}
</script>

<style lang="scss">
.navbar-nav {
  min-height: 50px;
}
.navbar {
  position: relative;
  min-height: 50px;
  .logo {
    position: absolute;
    height: 150px;
    width: 270px;
    left: 41%;
    top: -100%;
  }
  @media (max-width: 768px) {
    .logo {
      position: relative;
      margin: 0 auto;
      left: 0;
      width: auto;
    }
  }
}
.navbar-nav {
  position: relative;
  .favoriate {
    position: absolute;
    right: -24%;
  }
}
.navbar-brand {
  padding: 0;
}
.cart {
  z-index: 300;
  position: fixed;
  right: 3%;
}
@media (max-width: 768px) {
  .cart {
    right: 10px;
    top: 60px;
    min-width: 100%;
  }
}

li {
  font-weight: 900;
}
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

@media (max-width: 768px) {
}
.btn-cart {
  position: fixed;
  right: 35px;
  top: 50px;
}
@media (max-width: 768px) {
  .btn-cart {
    right: 5px;
    top: 0px;
  }
}
.cartmenu {
  min-width: 400px;
}
@media (max-width: 768px) {
  .cartmenu {
    min-width: 100%;
  }
}
</style>
