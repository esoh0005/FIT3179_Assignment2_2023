var vg_1 = "js/new_choropleth_map.vg.json"; 
var vg_2 = "js/boxplot_happiness.vg.json";
var vg_3 = "js/multiple_views.vg.json";
var vg_4 = "js/circle_happiness.vg.json";
var vg_5 = "js/bubble_chart_happiness.vg.json";

vegaEmbed("#map", vg_1,{"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#boxplot", vg_2,{"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#multiple", vg_3,{"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#circle", vg_4,{"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#bubble", vg_5,{"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);