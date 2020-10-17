async function Main() {
    
    var App = (await import("./App.vue")).default;
    var Vue = (await import("vue")).default;

    new Vue({
        render: createElement => createElement(App) 
    }).$mount('#app');
}

Main();