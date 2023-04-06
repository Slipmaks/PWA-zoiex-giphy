<v-carousel hide-delimiters>
  <v-carousel-item
    v-for="item in store.searchResultGifs.data"
    :key="item.id"
    :src="item.images.fixed_width.url"
  ></v-carousel-item>
</v-carousel>
