<template>
 <div>
 <div v-if="cart.carts.length" class="container">
      <div class="my-5 row justify-content-center">
      <div class="my-5 row justify-content-center up">
        <table class="table w-75">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id" >
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                 <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>

        <div class="input-group mb-3 input-group-sm w-75">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" @keyup.enter="addCouponCode">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>

        <p class="text-left text-danger w-100">{{coupon_message}}</p>
      </div>
    </div>

  <div class="my-5 row justify-content-center">
  <form class="col-md-6" @submit.prevent="createOrder">
    <div class="form-group">
      <validation-provider rules="required" v-slot="{ errors }">
      <label for="useremail" class="mb-2">Email</label>
      <input  type="email" class="form-control" name="email" id="useremail"
        v-model="form.user.email" placeholder="請輸入 Email"><span class="text-danger">{{ errors[0] }}</span>
      </validation-provider>
    </div>
    <div class="form-group">
      <validation-provider rules="required" v-slot="{ errors }">
      <label for="username" class="mb-2">收件人姓名</label>
      <input type="text" class="form-control" name="username"
        v-model="form.user.name" placeholder="輸入姓名"><span class="text-danger">{{ errors[0] }}</span>
      </validation-provider>
    </div>
    <div class="form-group">
      <validation-provider rules="required" v-slot="{ errors }">
      <label for="usertel" class="mb-2">收件人電話</label>
      <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話" name='phone'><span class="text-danger">{{ errors[0] }}</span>
      </validation-provider>
    </div>
    <div class="form-group">
      <validation-provider rules="required" v-slot="{ errors }">
      <label for="useraddress" class="mb-2">收件人地址</label>
      <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
        placeholder="請輸入地址"><span class="text-danger">{{ errors[0] }}</span>
      </validation-provider>
    </div>
    <div class="form-group">
      <label for="comment" class="mb-2">留言</label>
      <textarea id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
    </div>
    <div class="text-right">
      <button class="btn btn-danger" >送出訂單</button>
    </div>
  </form>
</div>
 </div>

  <div class="my-5 row justify-content-center" v-else>
  <div class="p-4 bg-warning" style="border-radius:10px;color:red;font-size:20px;">
      <p>購物車尚無任何商品!</p> <br>
      <p class="mt-2">請新增商品後再結帳!</p>
  </div>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      products: [],
      product: {},
      isLoading: false,
      cart: { carts: '' },
      coupon_code: '',
      coupon_message: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          adress: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then(response => {
        vm.cart = response.data.data
        vm.isLoading = false
      })
    },
    removeCartItem (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const vm = this
      vm.isLoading = true
      vm.$http.delete(api).then(() => {
        vm.getCart()
        vm.isLoading = false
      })
    },
    addCouponCode () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code
      }
      vm.isLoading = true
      vm.$http.post(url, { data: coupon }).then((response) => {
        vm.coupon_message = response.data.message
        vm.getCart()
        vm.isLoading = false
      })
    },
    createOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.isLoading = true
      vm.$http.post(url, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/customer_check/${response.data.orderId}`)
        }
        vm.isLoading = false
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped>
</style>
