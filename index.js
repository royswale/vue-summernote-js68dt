// Import stylesheets
import Vue from 'vue';

import SummerNote from './components/summernote';

new Vue({
  el: '#app',
  components: {
    SummerNote: SummerNote
  },
  data() {
    return {
      message: 'Hello'
    }
  },
  mounted() {
    var self = this;
    self.$refs.editor.run('code','<h2>Hello</h2>');
  },
  methods: {
    getValue() {
      var overview = this.$refs.editor.getVal()
      console.log(overview);
    }
  }
})