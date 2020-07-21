<template>
<div class="container">
    <h3 class="text-center mt-4 mb-4" style="font-weight:900;">特殊技術</h3>
            <div class="btn-group d-flex w-50 TechGroup" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info"  @click="Isviewing = 'grill'">網版印刷</button>
                 <button type="button" class="btn btn-info" @click="Isviewing = 'digital'">數位直噴</button>
                 <button type="button" class="btn btn-info" @click="Isviewing = 'csew'">電腦刺繡</button>
            </div>

    <div class="grill" :class="{'view':Isviewing == 'grill'}">
        <div class="card tech mt-5">
        <div class="card-body">
            <h2 class="text-center mb-3">網版印刷</h2>
            <p>網版印刷又稱之為網印、絲印或絹印，是一種傳統工藝，在台灣成衣網版印刷部分仍以人工手印為主，適合圖案花色少、印製數量多的低價印刷方式。<br>
               印刷前需製版，再利用刮刀將顏料均勻地滲入版上網目與織物結合，印刷師傅的手感直接地影響印刷圖案的平整度與解析度。各式布料因具不同成份、織紋、 顏色、彈性與吸水性，將影響印刷的色澤、堅牢度與解析度，因此網印相當仰賴師傅的經驗與技術，以達到最佳印刷效果。<br>
               本廠於新竹在地服務已近三十年，印刷師傅具有四十多年印花經驗，採用日本進口顏料，無毒環保且耐水洗，針對防潑水外套與背心另採特殊油墨，此外還有燙金、燙銀、金蔥與金漿等特殊網印。<br>
               本廠除了T恤、Polo衫、各種外套背心等成衣印刷外，帆布袋、帽子 、各式提袋背包…等布織品皆有提供印刷服務，歡迎來電與蒞臨。
            </p>

            <div class="row frame d-flex mt-3">
                <div class="col-md-6 col-sm-12 bg-cover" style="background-image:url(./grill2.jpg);"></div>
                <div class="col-md-6 col-sm-12">
                    <div class="bg-cover " style="background-image:url(./grill4.jpg);"></div>
                </div>
            </div>
        </div>
        </div>
    </div>

    <div class="digital" :class="{'view':Isviewing== 'digital'}">
        <div class="card tech mt-5">
        <div class="card-body">
            <h2 class="text-center mb-3 text-xl">數位直噴</h2>
            <p>數位直噴印刷有別於於傳統印刷方式，無須透過其他載具印製圖案至衣物，而是將墨水直接噴印至布料成圖，不必利用網版與布料接觸印刷、或經紙與膠膜加熱印製，因此稱成衣直接列印技術(Direct To Garment Printing)，適合多色印刷。<br>
               本廠採購目前全球最受歡迎、來自以色列的工業級直噴機，不同於市面常見的桌上型直噴機種，除了適合量產，其工業級噴頭搭配獨步全球的環保墨水，不僅可百分之百生物分解，還具備優異的印刷色澤與飽和度，耐洗度通過ISO – 4級檢驗 (接近5級滿級分)，具OEKO-TEX® Standard 100安全認證，適合嬰兒皮膚接觸的無毒無害墨水<br>
            </p>

             <div class="frame mt-3" >
                <div class="bg-cover w-100 mb-2" style="background-image: url(./DTG1.jpg)"></div>
                <div class="row d-flex mt-3">
                    <div class="col-sm-6 bg-cover " style="background-image:url(./DTG2.jpg);"></div>
                    <div class="col-sm-6 bg-cover" style="background-image:url(./DTG3.jpg);"></div>
                </div>
             </div>
            </div>

        </div>
    </div>

        <div class="csew" :class="{'view':Isviewing=='csew'}">
        <div class="card tech mt-5">
        <div class="card-body">
            <h2 class="text-center mb-3">電腦刺繡</h2>
            <p>新竹最大工業級成品電繡機，日本原裝進口，2019最新最先進電繡機台，各大知名運動品牌指定機種， 提供12色繡花，支援精繡模式，可輸出一般機種無法達到的高品質，任何文字、數字、Logo皆可電繡。<br>
               支援各式成品電繡，如帽子、T-shirts、Polo衫、圍裙、背心、外套、背包…等，皆可繡字、繡圖、繡logo、 繡職稱姓名、 繡學號… 另有提供製作電繡臂章、車縫臂章等服務。
            </p>
             <div class="frame mt-3">
                <div class="bg-cover w-100 mb-2" style="background-image:url(./csew1.jpg)"></div>
                <div class="row d-flex">
                    <div class="col-sm-6 bg-cover" style="background-image:url(./csew2.jpg);"></div>
                    <div class="col-sm-6 bg-cover" style="background-image:url(./csew3.jpg);"></div>
                </div>
              </div>

        </div>
        </div>
        </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      Isviewing: 'grill'
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.grill, .csew, .digital{
    display:none;
}
.view{
    display:block;
}
.tech{
    background:black;
    color:white;
}
.bg-cover{
  background-position:center;
  background-size:cover;
  height:600px;
}
.btn-group{
    margin: 0 auto;
}
@media(max-width:786px){
.btn-group{
   min-width:100%;
}

}

</style>
