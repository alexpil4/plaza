export default {
  methods: {
    openWindow(name) {
      this.$store.dispatch('windows/open', {name}).then();
    },
    closeWindow(name) {
      if (name) {
        this.$store.dispatch('windows/close', name).then();
      } else {
        this.$refs.window.close();
      }
    },
    alert(text, title, type = 'warn') {
      const id = Math.random().toString(36).substr(2, 9);
      this.$store.dispatch('windows/open', {name: 'alert-' + id, text, title, type}).then();
    },
    songInfo(id) {
      this.$store.dispatch('windows/open', {name: 'song-' + id, id}).then();
    }
  }
}
