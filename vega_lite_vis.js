var vg_1 = "js/potiential_map_happiness.vg.json"; 
var vg_2 = "js/boxplot_happiness.vg.json";
var vg_3 = "js/multiple_chart_happiness.vg.json";
var vg_4 = "js/circles_happiness.vg.json";
var vg_5 = "js/country_line_happiness.vg.json";
var vg_6 = "js/bubble_economy_happiness.vg.json";
var vg_7 = "js/bubble_social_happiness.vg.json";
var vg_8 = "js/bubble_health_happiness.vg.json";
var vg_9 = "js/bubble_freedom_happiness.vg.json";
var vg_10 = "js/bubble_generosity_happiness.vg.json";
var vg_11 = "js/bubble_corruption_happiness.vg.json";


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
vegaEmbed("#circles", vg_4,{"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#country_line", vg_5,{"actions": false}).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bubble_economy_happiness", vg_6, {"actions": false})
    .then(function (result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

      //highlight 1st icon by default
      let el = document.getElementById('gdp_icon');
            el.style.filter =  'grayscale(0%)';
            el.style.filter =  'brightness(110%)';
    })
    .catch(console.error);

vegaEmbed("#bubble_family_happiness", vg_7, {"actions": false})
    .then(function (result) {
        document.getElementById('bubble_family_happiness').closest('.sp').style.display = 'none';
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    })
    .catch(console.error);

vegaEmbed("#bubble_health_happiness", vg_8, {"actions": false})
    .then(function (result) {
        document.getElementById('bubble_health_happiness').closest('.sp').style.display = 'none';
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    })
    .catch(console.error);

vegaEmbed("#bubble_freedom_happiness", vg_9, {"actions": false})
    .then(function (result) {
        document.getElementById('bubble_freedom_happiness').closest('.sp').style.display = 'none';

        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    })
    .catch(console.error);

vegaEmbed("#bubble_generosity_happiness", vg_10, {"actions": false})
    .then(function (result) {
        document.getElementById('bubble_generosity_happiness').closest('.sp').style.display = 'none';

        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    })
    .catch(console.error);

vegaEmbed("#bubble_corruption_happiness", vg_11, {"actions": false})
    .then(function (result) {
        document.getElementById('bubble_corruption_happiness').closest('.sp').style.display = 'none';

        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    })
    .catch(console.error);