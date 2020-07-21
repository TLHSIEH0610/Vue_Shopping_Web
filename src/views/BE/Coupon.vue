<template>
  <div>
    <div class="container">
      <button
        class="btn d-flex ml-auto btn-outline-primary mb-4 mt-4"
        type="button"
        @click="CouponSet(true)"
      >
        新增優惠碼
      </button>

      <table class="table">
        <thead>
          <tr>
            <td>優惠券名稱</td>
            <td>是否啟用</td>
            <td>折扣數(%)</td>
            <td>有效日期</td>
            <td>優惠代碼</td>
            <td>管理</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in currentcoupon" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.is_enabled }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ item.due_date }}</td>
            <td>{{ item.code }}</td>
            <td>
              <button class="btn btn-primary" @click="CouponSet(false, item)">
                編輯
              </button>
              <button class="btn btn-danger" @click="deletecoupon(item)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="CouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary text-light ">
            <h5 class="modal-title text-xl-center" id="exampleModalLabel">
              優惠券管理
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
            <div class="mt-2">
              <label for="coupt">優惠券名稱</label>
              <input
                type="text"
                name=""
                id="coupt"
                v-model="Createcoupon.title"
              />
            </div>
            <div class="mt-2">
              <label for="coupd">折扣數(%)</label>
              <input
                type="text"
                name=""
                id="coupd"
                v-model="Createcoupon.percent"
              />
            </div>
            <div class="mt-2">
              <label for="coupda">有效日期</label>
              <input
                type="text"
                name=""
                id="coupda"
                v-model="Createcoupon.due_date"
              />
            </div>
            <div class="mt-2">
              <label for="coupc">優惠代碼</label>
              <input
                type="text"
                name=""
                id="coupc"
                v-model="Createcoupon.code"
              />
            </div>
            <div class="mt-2">
              <label for="coupo">是否啟用</label>
              <input
                type="checkbox"
                name=""
                id="coupo"
                v-model="Createcoupon.is_enabled"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="UpdateCouponCode"
            >
              確認新增
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
      Createcoupon: {
        title: '',
        is_enabled: '',
        percent: '',
        due_date: '',
        code: ''
      },
      currentcoupon: {},
      isnew: false
    }
  },
  methods: {
    CouponSet (isnew, item) {
      $('#CouponModal').modal('show')
      const vm = this
      if (isnew) {
        vm.Createcoupon = {}
        this.isNew = true
      } else {
        vm.Createcoupon = Object.assign({}, item)
        vm.isNew = false
      }
    },
    UpdateCouponCode () {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      const vm = this
      let httpmethod = 'post'
      if (!vm.isnew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.Createcoupon.id}`
        httpmethod = 'put'
      }
      vm.$http[httpmethod](api, { data: vm.Createcoupon }).then(response => {
        if (response.data.success) {
          console.log('更新成功')
          $('#CouponModal').modal('hide')
          vm.GetCouponCode()
        } else {
          console.log('更新失敗')
          $('#CouponModal').modal('hide')
          vm.GetCouponCode()
        }
      })
    },
    GetCouponCode (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?${page}`
      const vm = this
      vm.$http.get(api).then(response => {
        console.log(response)
        vm.currentcoupon = response.data.coupons
      })
    },
    deletecoupon (item) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${item.id}`
      vm.$http.delete(api).then(response => {
        console.log(response)
        vm.GetCouponCode()
      })
    }
  },
  created () {
    this.GetCouponCode()
  }
}
</script>

<style lang="scss">
</style>
