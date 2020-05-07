const colors = {
  "CA-SK": "#9CCE59",
  "CA-BC": "#449284",
  "CA-NT": "#96AEBE",
  "CA-NU": "#75C5F0",
  "CA-ON": "#F8C300",
  "CA-MB": "#B8DA6B",
  "CA-NS": "#DB214C",
  "CA-QC": "#F4B97F",
  "CA-YT": "#798992",
  "CA-NB": "#EB8990",
  "CA-NL": "#F7C5B4",
  "CA-AB": "#98AF85",
  "CA-PE": "#DB214C",
};

const waitForJQuery = setInterval(function () {
  if (typeof $ != "undefined") {
    $(function () {
      const map = new jvm.Map({
        map: "ca_lcc",
        container: $("#canada-map"),
        series: {
          regions: [
            {
              attribute: "fill",
            },
          ],
        },
        regionsSelectable: true,
        regionsSelectableOne: true,
        regionStyle: {
          initial: {
            "fill-opacity": 0.3,
          },

          selected: {
            "fill-opacity": 1,
            stroke: "#FFFFFF",
            fill: "#f74b00",
          },
        },
        backgroundColor: "none",
        zoomMax: 1,
        regionLabelStyle: {
          initial: {
            fill: "#B90E32",
          },
          hover: {
            fill: "black",
          },
        },
        onRegionClick: (event, code) => {
          $(".chapter-info").hide();
          $("#chapter-info-" + code).show();
        },
        onRegionSelected: (event, code, isSelected, selectedRegions) => {},
      });
      map.series.regions[0].setValues(colors);
    });

    clearInterval(waitForJQuery);
  }
}, 10);
