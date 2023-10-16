const app = Vue.createApp({
  data() {
    return {
      content: "Page content",
      links: [{ text: "Home" }, { text: "About" }, { text: "Contact" }],
      sectionTitle: "lorem",
    };
  },
  methods: {
    press() {
      return alert("you clicked me");
    },
  },
});

app.component("page-viewer", {
  props: ["work", "buttonName"],
  template: `
     <div>
      <div>
        <h4 v-if="visible">{{work}}</h4>
        <h4 v-else>Not Worked</h4>
        <button v-on:click.prevent="press()">{{buttonName}}</button>
      </div>
     </div>
  `,
});
app.mount("body");
