const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      isRender: true,
      userInputBackground: "",
    };
  },
  watch: {},
  computed: {
    dynamicClass() {
      return [
        "default-text",
        { user1: this.userInput === "user1" },
        { user2: this.userInput === "user2" },
        this.isRender ? "visible" : "hidden",
      ];
    },
    dynamicStyles() {
      return { backgroundColor: this.userInputBackground };
    },
  },
  methods: {
    showParagrahp() {
      console.log(this.isRender);
      this.isRender = !this.isRender;
    },
  },
});

app.mount("#assignment");
