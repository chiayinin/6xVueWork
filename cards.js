export default {
  props: ['showData'],
  template: `
  <template>
    <div class="col-md-6 py-2 px-1" v-for="(item, key) in showData" :key="key">
      <div class="card">
        <div class="card bg-dark text-white text-left">
          <img class="card-img-top img-cover" height="155px" :src="item.Picture1">
          <div class="card-img-overlay d-flex justify-content-between align-items-end p-0 px-3" style="background-color: rgba(0, 0, 0, .2)">
          <h5 class="card-img-title-lg">{{ item.Name }}</h5><h5 class="card-img-title-sm">{{ item.Zone }}</h5>
        </div>
        </div>
        <div class="card-body text-left">
            <p class="card-text"><i class="far fa-clock fa-clock-time"></i>&nbsp;{{ item.Opentime }}</p>
            <p class="card-text"><i class="fas fa-map-marker-alt fa-map-gps"></i>&nbsp;{{ item.Add }}</p>
            <p class="card-text"><i class="fas fa-mobile-alt fa-mobile"></i>&nbsp;{{ item.Tel }}</p>
            <div v-if="item.Ticketinfo">
              <p class="card-text"><i class="fas fa-tags text-warning"></i>&nbsp;{{ item.Ticketinfo }}</p>
            </div>
        </div>
      </div>
    </div>
  </template>
  `
}
