<template>
  <div>
    <div class="Footer py-2 mt-5 bg-cover img-fluid">
      <div
        class="container text-white d-flex justify-content-center align-items-center mt-5"
        style="font-size:20px;font-weight:900;"
      >
        <div class="row w-100">
          <div class="col-md-6 col-sm-12 p-5 footword fl" style="">
            <div class="title">Contact</div>
            <ul class="d-flex flex-column justify-content-around mt-2">
              <li class="mt-3">
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <h2>新竹縣竹北市光明九路227號</h2>
              </li>
              <li class="mt-3">
                <i class="fas fa-phone-square fa-2x"></i>
                <h2>0988015716</h2>
              </li>
              <li class="mt-3">
                <i class="fas fa-envelope fa-2x"></i>
                <h2>r01942085@gmail.com</h2>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-sm-12 p-5 footword fr" style="">
            <div class="title">Follow</div>
            <div class="icon">
              <a
                href="https://www.facebook.com/HsinchuTprint/?ref=page_internal"
                class="d-block mt-3"
                ><i class="fab fa-facebook fa-2x mt-3 text-white"></i
              ></a>
              <a href=""
                ><i
                  class="fab fa-twitter fa-2x mr-2 text-white d-block mt-3"
                ></i
              ></a>
              <a href=""
                ><i class="fab fa-instagram fa-2x text-white d-block mt-3"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="container d-flex flex-column">
        <p
          class="mr-2 mt-4 mb-0 text-white ml-auto mr-auto bg-info p-2"
          style="font-size:20px;"
        >
          @1989-2020 弼丞國際印刷
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
h2{
//   font-size:
}
.Footer {
  background-attachment: fixed;
  background-image: url(../../public/DOG.jpg);
  height: 800px;
}

@media (max-width: 768px) {
  .Footer {
    height: 100%;
    width: 100%;
  }
}

.footword {
  background-color: black;
  opacity: 0.5;
  &.fl {
    margin-top: 70px;
    border-radius: 15% 0 0 15%;
  }
  &.fr {
    height: 475px;
    border-radius: 0 15% 15% 0;
  }
}
@media (max-width: 768px) {
  .footword {
    // width:autso;
    font-size:16px;
    &.fl {
      width: 100%;
      margin-top: 30px;
      border-radius: 15%;
    }
    &.fr {
      width: 100%;
      margin-top: 30px;
      height: auto;
      border-radius: 15%;
    }
    .title{
      font-size:45px;
    }
  }
}
</style>
