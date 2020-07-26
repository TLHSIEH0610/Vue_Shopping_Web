<template>
  <div>
    <!--carosuel-->
    <div
      id="carouselExampleCaptions"
      class="carousel slide mt-3"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner container-fluid">
        <div class="carousel-item active img-fluid">
          <div
            class="d-block w-100 bg-cover"
            alt="..."
            style="background-image: url(./top1.jpg);"
          >
          </div>
          <div class="carousel-caption banworld">
            <h2>印出最真實的色彩</h2>
            <p>純手工調色，用60年的的經驗打造獨特的風格</p>
          </div>
        </div>
        <div class="carousel-item">
          <div
            alt="..."
            class="d-block w-100 bg-cover img-fluid"
            style="background-image:url(./bag_cat.jpg);"
          ></div>
          <div class="carousel-caption banworld">
            <h2>客製化商品</h2>
            <p>從T桖.外套.背包.到旗幟，為您設計獨家商品</p>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="d-block w-100 bg-cover img-fluid"
            alt="..."
            style="background-image:url(./top3.jpg);"
          ></div>
          <div class="carousel-caption banworld">
            <h2>各式專業技術</h2>
            <p>
             領先業界的先進機台，無論刺繡或印刷，都能快速交貨。
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!--熱門商品-->
    <p class="text-center ttext mt-4">商品種類</p>
    <div class="Hot mt-5 mb-5 d-flex justify-content-around container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <router-link to="/customer_order">
            <div class="card" style="width: 18rem;">
              <img
                src="@/assets/image/pdshirt.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="mask">
              <p>點我觀看</p>
              </div>
              <div class="card-body"  style="background:black; color:white">
                <p class="card-text text-center">
                  客製化印刷
                </p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-link to="/customer_order">
                <div class="card" style="width: 18rem;">
            <img
              src="@/assets/image/colorT.jpg"
              class="card-img-top"
              alt="..."
              style="height:380px;"
            />
              <div class="mask">
              <p>點我觀看</p>
              </div>
            <div class="card-body"  style="background:black; color:white">
              <p class="card-text text-center">
                高品質素T
              </p>
            </div>
          </div>
          </router-link>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-link to="/customer_order">
                <div class="card" style="width: 18rem;">
            <img
              src="@/assets/image/pdsew.jpg"
              class="card-img-top"
              alt="..."
              style="height:380px;"
            />
              <div class="mask">
              <p>點我觀看</p>
              </div>
            <div class="card-body"  style="background:black; color:white">
              <p class="card-text text-center">
                專業裁縫修改
              </p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <!--introduction卡片-->
  <div class="introductioncont p-5" style="background:black;">
      <div class="container">
    <div class="card-group mt-4">
  <div class="card tech">
    <img src="https://www.tprint.com.tw/wp-content/uploads/2019/03/sc2.svg" class="card-img-top" alt="..." style="background:black;">
    <div class="card-body"  style="background:black; color:white">
      <h5 class="card-title">網版印刷</h5>
      <p class="card-text" >傳統手印技術. 需開模製版印刷, 大量印刷價格低廉, 適合印製色塊.</p>
    </div>
  </div>
  <div class="card tech">
    <img src="https://www.tprint.com.tw/wp-content/uploads/2019/05/dtg.svg" class="card-img-top" alt="..." style="background:black;">
    <div class="card-body"  style="background:black; color:white">
      <h5 class="card-title">數位直噴印刷</h5>
      <p class="card-text">來自以色列的kornit數位直噴機, 免開版, 一件可印, 印刷觸感柔軟, 彩圖色澤飽滿.</p>
    </div>
  </div>
  <div class="card tech">
    <img src="https://www.tprint.com.tw/wp-content/uploads/2019/10/HP2.svg" class="card-img-top" alt="..." style="background:black;">
    <div class="card-body"  style="background:black; color:white">
      <h5 class="card-title">熱轉印</h5>
      <p class="card-text">免開版印刷, 一件可印, 適合印製球衣號碼, 選舉職稱姓名與各種彩圖.</p>
    </div>
  </div>
    <div class="card tech">
    <img src="https://www.tprint.com.tw/wp-content/uploads/2019/10/EMB5.svg" class="card-img-top" alt="..." style="background:black;">
    <div class="card-body"  style="background:black; color:white">
      <h5 class="card-title">電腦繡花</h5>
      <p class="card-text">經由電腦控制針線, 產生具立體感的繡線文字或圖案, 刺繡前需製作電腦繡花版.</p>
    </div>
  </div>
</div>
</div>
  </div>
<!--促銷代碼-->
  <div class="promo mt-5 bg-cover d-flex justify-content-center align-items-center" id="promo" style=";height:450px;background-image:url(https://images.unsplash.com/photo-1500241770736-a3f62bbc8717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)">
        <div class="codename text-center">
          <h2  class="mt-4" style="font-size:40px;color:red">SALE 春夏限定</h2>
          <p class="mt-4" style="color:yellow">30% OFF!</p>
          <p class="text-white mt-4">優惠代碼: <span style="color:red">SummerSpring</span></p>
       </div>
   </div>

<!--聯絡我們-->
  <!--line-->
<div class="container " style="margin-top: 50px;">
  <div class="row d-flex justify-content-around">
    <div class="col-md-6 col-sm-12">
      <div class="card w-75 ml-auto mr-auto">
      <img src="@/assets/image/linepattern.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">掃描或點擊QRcode加入好友 <br>Line ID: leo20140226</p>
      </div>
      </div>
    </div>
    <!--留言-->
    <div class="col-md-6 col-sm-12">
      <div class="container h-100 w-100 mt-3">
        <form class="justify-content-around d-flex flex-column h-100" @submit.prevent="sendEmail">
          <h2 class="text-center">聯絡我們</h2>
          <div class="w-100 d-flex contact form-group">
          <validation-provider rules="required" v-slot="{ errors }">
              <label for="username" class="">姓名：</label>
              <input class="form-control" type="text" name="username" id="username" v-model="form.username" />
              <p class="text-danger">{{ errors[0] }}</p>
          </validation-provider>
          </div>
          <div class="w-100 d-flex contact form-group">
          <validation-provider rules="required" v-slot="{ errors }">
              <label for="email" class="">電子郵件：</label>
              <input class="form-control" type="text" name="email" id="email" v-model="form.email"/>
              <p class="text-danger">{{ errors[0] }}</p>
          </validation-provider>
          </div>
          <div class="w-100 d-flex contact form-group">
          <validation-provider rules="required" v-slot="{ errors }">
              <textarea class="form-control" name="description" id="description" cols="30" rows="10" placeholder="請輸入訊息" v-model="form.description"></textarea>
              <p class="text-danger">{{ errors[0] }}</p>
          </validation-provider>
          </div>
          <div>
              <input type="submit" value="送出訊息" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="container">
<p class="text-xl-center mt-5 ttext">公司地圖</p>
<iframe class="gmap w-100 mt-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.0809867949592!2d121.00440011500204!3d24.826903884069704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683692718859ab%3A0xa7a78e1f9b516cda!2zMzAy5paw56u557ij56u55YyX5biC5YWJ5piO5Lmd6LevMjI36Jmf!5e0!3m2!1szh-TW!2stw!4v1592897703609!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

</div>
  </div>
</template>

<script>
// import L from 'leaflet';
// console.log(L);
export default {
  name: 'Home',
  data () {
    return {
      form: {
        username: '',
        email: '',
        description: ''
      }
    }
  },
  methods: {
    sendEmail () {
      const vm = this
      const url = 'https://serieux-croissant-09871.herokuapp.com/post'
      // const temp = 'http://127.0.0.1:3000/post'
      vm.$http.post(url, vm.form).then(response => {
        alert('留言已送出，我們將盡快回覆!')
      })
    }
  }
}
</script>

<style lang ="scss" scoped>
body{
  line-height:1.5;
}
p{
  margin-top:3px;
  margin-bottom:3px;
}
.ttext{
  font-size:30px;
  font-weight:900;
}
.card{
  position:relative;
  text-align:center;
}
.card .mask{
  position:absolute;
  top:0;
  left:0;
  opacity: 0;
  width:288px;
  height:366px;
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  text-align:center;

}
.mask p{
  margin-top:120px;
  font-size:25px;
}
.card:hover .mask{
    opacity: 1;
}
.bg-cover{
  background-position:center;
  background-size:cover;
  height:600px;
}

.banworld{
  background-color:black;
  opacity:0.5;
  font-weight:bold;
  font-size:26px;
}
.banworld p{
  font-size:20px;
}
.codename{
  background-color:rgba(0,0,0,0.5);
  padding:15px;
  font-weight:bold;
  font-size:35px;
  padding-top:130px;
  width:700px;
  height:500px;
}
.promo{
  background-attachment:fixed;
}

@media(max-width:786px){
  .carousel-item{

  }
  .carousel-caption{
  }
}

@media(max-width:786px){
  .contact{
    margin-top:8px;
  }
}
</style>
