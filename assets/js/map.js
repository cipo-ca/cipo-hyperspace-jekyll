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
    "CA-PE": "#DB214C"
};

const provinceData = {
    "CA-BC":
        "<ul><li>Newborn Screening “BC currently does not include SCID in their newborn screening. CIPO is undertaking a review and advocating for it to be included, help us!”</li>" +
        "<li>Paid Plasma: “With the passing of the Voluntary Blood Donations Act in 2018, the NDP banned compensation for plasma”</li>" +
        "<li>Monthly Meet Ups: Vancouver, Vernon, Surrey</li></ul>",
    "CA-AB":
        "<ul><li>Newborn Screening: “Alberta included SCID in their Newborn Screening in May 2019”</li>" +
        "<li>Paid Plasma: “Alberta NDP passed a Voluntary Blood Donations Act in 2018, however, the new government may be open to reversing the bill. CIPO is advocating for compensation of plasma donations in Alberta”</li>" +
        "<li>Monthly meet ups: Calgary, Edmonton, Medicine Hat</li></ul>",
};

const showInfo = (code) => {
    alert('poop')
    $('.chapter-info').visibility = "visible";
    $('#chapter-info-'+code).visibility = "visible";
}

const waitForJQuery = setInterval(function () {
    if (typeof $ != "undefined") {
        $(function () {
            //$("#canada-map").vectorMap({
            const map = new jvm.Map({
                map: "ca_lcc",
                container: $('#canada-map'),
                series: {
                    regions: [{
                        attribute: 'fill'
                    }]
                },
                onRegionTipShow: function (e, el, code) {
                    el.html(el.html() + provinceData[code]);
                },
                regionsSelectable: true,
                regionsSelectableOne: true,
                regionStyle: {

                    initial: {
                        "fill-opacity": 0.25
                    },

                    selected: {
                        "fill-opacity": 1,
                        stroke: '#FFFFFF',
                        //"stroke-width": 2
                        fill: '#f74b00'
                    }
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
                    //event.preventDefault();
                    //map.series.regions[0].setValues(colors);
                    //alert(code);
                    //showInfo(code);
                    $('.chapter-info').hide();
                    $('#chapter-info-'+code).show();
                },
                onRegionSelected: (event, code, isSelected, selectedRegions) => {
                    const mapObject = $('#canada-map').vectorMap('get', 'mapObject');
                    //alert(JSON.stringify(mapObject.series.regions[0].elements[code],censor(mapObject.series.regions[0].elements[code].element.config.map.params.map)));
                    //mapObject.series.regions[0].setValues(colors);
                    /*
                  alert(map.series.regions[0])
                  map.series.regions[0].clear();
                  map.series.regions[0].setValues(colors);
                     */
                }
            });
            //alert(map.regions)
            map.series.regions[0].setValues(colors);
        });

        clearInterval(waitForJQuery);
    }
}, 10);
