<template>
  <div>
    <div class="container mt-4">
      <table class="table">
        <thead>
          <tr>
            <td>購買時間</td>
            <td>Email</td>
            <td>購買款項</td>
            <td>應付金額</td>
            <td>是否付款</td>
            <td>管理</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td width="80">{{ item.create_at | stamp }}</td>
            <td>{{ item.user.email }}</td>
            <td>
              <ul>
                <li v-for="detail in item.products" :key="detail.id">
                  {{ detail.product.title }}:{{ detail.product.num }}
                </li>
              </ul>
            </td>
            <td width="80" class="text-right">{{ item.total | currency }}</td>
            <td width="80">
              <span v-if="item.is_paid">已付款</span>
              <span v-else>未付款</span>
            </td>
            <td>
              <button class="btn btn-danger" @click="OpenOrder(item)">
                修改
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="OrderUpdate"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改訂單</h5>
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
            Email:
            <input type="text" name="" id="" v-model="tempOrder.user.email" />
            總價:<input type="text" name="" id="" v-model="tempOrder.total" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              關閉
            </button>
            <button type="button" class="btn btn-primary" @click="UpdateOrder">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      orders: [],
      tempOrder: {
        // 暫存編輯訂單資料
        create_at: '',
        is_paid: '',
        message: '',
        paid_date: '',
        products: [],
        total: '',
        user: {
          address: '',
          email: '',
          name: '',
          tel: ''
        }
      }
    }
  },
  methods: {
    getOrders (page = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`

      vm.isLoading = true
      this.$http.get(url).then(response => {
        console.log(response, '全部訂單已取得')
        if (response.data.success) {
          vm.orders = response.data.orders
        }
        vm.isLoading = false
      })
    },
    UpdateOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`

      vm.isLoading = true
      this.$http.put(url, { data: vm.tempOrder }).then(response => {
        console.log(response, '修改訂單送出')
        $('#OrderUpdate').modal('hide')
        vm.getOrders()
        vm.isLoading = false
      })
    },
    OpenOrder (item) {
      $('#OrderUpdate').modal('show')
      this.tempOrder = Object.assign({}, item)
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
