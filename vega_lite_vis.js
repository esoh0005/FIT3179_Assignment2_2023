var vg_1 = "new_choropleth_map.vg.json"; 
var vg_2 = "TopWineProducers.vg.json";
var vg_3 = "area.vg.json";

vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#pie", vg_2).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#area", vg_3).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);