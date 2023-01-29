import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js';
import pages from './pages.js';
import cards from './cards.js';

const jsonUrl = 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c';

const app = createApp({
  data() {
    return {
      // 全部的資料
      jsonData: {},
      // 篩選後的資料
      showData: [],
      // 一頁顯示 20 筆資料
      perPage: 20,
      // 預設當前頁數
      nowPage: 1,
      pageData: {}

    }
  },
  components: {
    pages,
    cards,
  },
  methods: {
    async getData() {
      try {
        let response = await axios.get(jsonUrl);
        this.jsonData = response.data.data.XML_Head.Infos.Info;
        this.pagination(this.nowPage, this.jsonData);
      } catch(error) {
        console.dir(error);
      }
    },
    switchPage(nowPage) {
      this.pagination(nowPage)
    },
    pagination(nowPage, jsonData) {
      const dataTotal = jsonData.length;
      const pageTotal = Math.ceil(dataTotal / this.perPage);
      let currentPage = nowPage;
      // 顯示該頁資料的順序 EX: 1~20, 21~40, 41~60 ......
      const minData = (currentPage * this.perPage) - this.perPage + 1 ;
      const maxData = (currentPage * this.perPage) ;

      if(currentPage > pageTotal) currentPage = pageTotal;

      jsonData.forEach((item, index) => {
        const num =  index + 1;
        if( num >= minData && num <= maxData) this.showData.push(item);
      })
      this.pageData = {
        pageTotal,
        currentPage,
        hasPage: currentPage > 1,
        hasNext: currentPage < pageTotal,
      }
    },
  },
  mounted() {
    this.getData();
  }
})

app.mount('#app');
