let vm = new Vue({
    el: "#calc",
    data: {
        result: 0,
        current: '',
    },
    method: {
        press: function(e) {
            this.result = this.result + e.dataset.key;
        }
    }
})