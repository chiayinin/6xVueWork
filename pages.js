export default {
  props: ['pages'],
  emits: ['pageBtn'],
  methods: {
    pageBtn(nowPage, e) {
      if(e.target.nodeName !== 'A') return;
      this.$emit('switchPage', nowPage)
    }
  },
  template: `
    <template v-for="(page, key) in pages.pageTotal" :key="key">
      <li class="page-item" :class="{'disabled':!pages.hasPage}">
        <a href="#" class="page-link" v-if="key === 0" @click.prevent="pageBtn(pages.currentPage - 1, $event)">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click.prevent="pageBtn(page, $event)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled':!pages.hasNext}">
        <a href="#" class="page-link" v-if="(key + 1) === page.pageTotal " @click.prevent="pageBtn(pages.currentPage + 1, $event)">Next</a>
      </li>
    </template>
  `
}
