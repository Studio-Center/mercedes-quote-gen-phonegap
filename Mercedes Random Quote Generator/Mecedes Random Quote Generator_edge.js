/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['66px', '20px','351px','229px','auto', 'auto'],
                text: "Hey Yall!",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 22, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['64px', '676px','351px','35px','auto', 'auto'],
                cursor: ['pointer'],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['1px', '-3px','568px','66px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(192,192,192,1)",[90,[['rgba(66,66,66,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                    stroke: [1,"rgba(0,0,0,1)","solid"]
                },
                {
                    id: 'Text3',
                    type: 'text',
                    rect: ['16px', '7px','326px','24px','auto', 'auto'],
                    text: "Mercedes Moran Quote of the Day",
                    align: "center",
                    font: ['Verdana, Geneva, sans-serif', 16, "rgba(0,0,0,1)", "600", "none", "normal"],
                    textShadow: ["rgba(255,255,255,0.57)", 0, 1, 0]
                }]
            },
            {
                id: 'back-hair',
                type: 'image',
                rect: ['39px', '264px','399px','414px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back-hair.png",'0px','0px']
            },
            {
                id: 'body',
                type: 'image',
                rect: ['39px', '264px','399px','414px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"body.png",'0px','0px']
            },
            {
                id: 'table',
                type: 'image',
                rect: ['39px', '259px','399px','414px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"table.png",'0px','0px']
            },
            {
                id: 'highlight',
                type: 'image',
                rect: ['39px', '264px','399px','414px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"highlight.png",'0px','0px']
            },
            {
                id: 'left-arm',
                type: 'image',
                rect: ['13px', '143px','608px','630px','auto', 'auto'],
                clip: ['rect(191px 498px 353px 383px)'],
                fill: ["rgba(0,0,0,0)",im+"left-arm.png",'0px','0px'],
                transform: [[],['-85'],[],['0.656','0.656']]
            },
            {
                id: 'right-arm',
                type: 'image',
                rect: ['3px', '135px','608px','630px','auto', 'auto'],
                clip: ['rect(203px 234px 366px 126px)'],
                fill: ["rgba(0,0,0,0)",im+"right-arm.png",'0px','0px'],
                transform: [[],['89'],[],['0.656','0.656']]
            },
            {
                id: 'eyes',
                type: 'image',
                rect: ['-65px', '198px','608px','630px','auto', 'auto'],
                clip: ['rect(151px 393px 205px 216px)'],
                fill: ["rgba(0,0,0,0)",im+"eyes.png",'0px','0px'],
                transform: [[],[],[],['0.656','0.656']]
            },
            {
                id: 'eyebrows',
                type: 'image',
                rect: ['-65px', '255px','608px','630px','auto', 'auto'],
                clip: ['rect(126px 419px 176px 180px)'],
                fill: ["rgba(0,0,0,0)",im+"eyebrows.png",'0px','0px'],
                transform: [[],[],[],['0.656']]
            },
            {
                id: 'smile-open',
                type: 'image',
                rect: ['-64px', '177px','608px','630px','auto', 'auto'],
                clip: ['rect(214px 334px 264px 276px)'],
                fill: ["rgba(0,0,0,0)",im+"smile-open.png",'0px','0px'],
                transform: [[],[],[],['0.656','0.92']]
            },
            {
                id: 'quotes',
                type: 'image',
                rect: ['-10px', '-10px','86px','88px','auto', 'auto'],
                opacity: 0.07769775390625,
                fill: ["rgba(0,0,0,0)",im+"quotes.png",'0px','0px'],
                transform: [[],[],[],['0.6','0.6']]
            },
            {
                id: 'quotesCopy',
                type: 'image',
                rect: ['405px', '101px','86px','88px','auto', 'auto'],
                opacity: 0.07769775390625,
                fill: ["rgba(0,0,0,0)",im+"quotes.png",'0px','0px'],
                transform: [[],['180'],[],['0.6','0.6']]
            },
            {
                id: 'Call_Us',
                type: 'rect',
                rect: ['97px', '730px','auto','auto','auto', 'auto']
            },
            {
                id: 'Logo_click',
                type: 'rect',
                rect: ['77', '556','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Call_Us',
                symbolName: 'Call_Us'
            },
            {
                id: 'Logo_click',
                symbolName: 'Logo_click'
            }
            ]
        },
    states: {
        "Base State": {
            "${_eyes}": [
                ["style", "-webkit-transform-origin", [50,28], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '0.65637'],
                ["style", "right", 'auto'],
                ["style", "left", '-65px'],
                ["style", "width", '608px'],
                ["style", "top", '198px'],
                ["transform", "scaleY", '0.65637'],
                ["style", "height", '630px'],
                ["style", "clip", [151,393,205,216], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text3}": [
                ["subproperty", "textShadow.blur", '0px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '16px'],
                ["style", "font-size", '16px'],
                ["style", "top", '7px'],
                ["style", "width", '326px'],
                ["style", "height", '24px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "font-weight", '600'],
                ["subproperty", "textShadow.color", 'rgba(255,255,255,0.57)']
            ],
            "${_table}": [
                ["style", "top", '259px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '414px'],
                ["style", "right", 'auto'],
                ["style", "left", '39px'],
                ["style", "width", '399px']
            ],
            "${_Text2}": [
                ["style", "font-style", '']
            ],
            "${_eyebrows}": [
                ["style", "-webkit-transform-origin", [50,24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '0.65637'],
                ["style", "right", 'auto'],
                ["style", "left", '-65px'],
                ["style", "width", '608px'],
                ["style", "top", '208px'],
                ["transform", "scaleY", '0.7'],
                ["style", "height", '630px'],
                ["style", "clip", [126,419,176,180], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_quotes}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0.07769775390625'],
                ["style", "left", '-10px']
            ],
            "${_left-arm}": [
                ["style", "-webkit-transform-origin", [73,55], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [73,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [73,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [73,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [73,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [73,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-83deg'],
                ["transform", "scaleX", '0.65637'],
                ["style", "right", 'auto'],
                ["style", "left", '-113px'],
                ["style", "width", '608px'],
                ["style", "top", '143px'],
                ["transform", "scaleY", '0.65637'],
                ["style", "height", '630px'],
                ["style", "clip", [191,498,353,383], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "bottom", 'auto']
            ],
            "${_Rectangle}": [
                ["gradient", "background-image", [90,[['rgba(66,66,66,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "cursor", 'pointer'],
                ["style", "width", '345px'],
                ["style", "top", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '29px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "border-width", '3px'],
                ["style", "left", '0px']
            ],
            "${_body}": [
                ["style", "top", '264px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '414px'],
                ["style", "right", 'auto'],
                ["style", "left", '39px'],
                ["style", "width", '399px']
            ],
            "${_highlight}": [
                ["style", "top", '264px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '414px'],
                ["style", "right", 'auto'],
                ["style", "left", '39px'],
                ["style", "width", '399px']
            ],
            "${_Group}": [
                ["style", "top", '676px'],
                ["style", "height", '35px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '64px'],
                ["style", "width", '351px']
            ],
            "${_Call_Us}": [
                ["style", "left", '97px'],
                ["style", "top", '730px']
            ],
            "${_Text}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "height", '229px'],
                ["style", "font-size", '22px'],
                ["style", "left", '66px'],
                ["style", "width", '351px']
            ],
            "${_back-hair}": [
                ["style", "top", '264px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '414px'],
                ["style", "right", 'auto'],
                ["style", "left", '39px'],
                ["style", "width", '399px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '770px'],
                ["style", "width", '480px']
            ],
            "${_smile-open}": [
                ["style", "-webkit-transform-origin", [50,38], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '0.65637'],
                ["style", "right", 'auto'],
                ["style", "left", '-64px'],
                ["style", "width", '608px'],
                ["style", "top", '177px'],
                ["transform", "scaleY", '0.32'],
                ["style", "height", '630px'],
                ["style", "clip", [214,334,264,276], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_right-arm}": [
                ["style", "-webkit-transform-origin", [30,56], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [30,56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [30,56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [30,56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [30,56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [30,56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '89deg'],
                ["transform", "scaleX", '0.65637'],
                ["style", "right", 'auto'],
                ["style", "left", '-34px'],
                ["style", "width", '608px'],
                ["style", "top", '135px'],
                ["transform", "scaleY", '0.65637'],
                ["style", "height", '630px'],
                ["style", "clip", [203,234,366,126], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "bottom", 'auto']
            ],
            "${_quotesCopy}": [
                ["style", "top", '101px'],
                ["transform", "scaleY", '0.6'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.6'],
                ["style", "opacity", '0.07769775390625'],
                ["style", "left", '405px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "start": 250,
                "animate": 500
            },
            timeline: [
                { id: "eid210", tween: [ "style", "${_eyebrows}", "top", '208px', { fromValue: '208px'}], position: 793, duration: 0 },
                { id: "eid214", tween: [ "style", "${_eyebrows}", "top", '206px', { fromValue: '208px'}], position: 793, duration: 270 },
                { id: "eid61", tween: [ "style", "${_Rectangle}", "width", '345px', { fromValue: '345px'}], position: 2000, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Rectangle}", "height", '29px', { fromValue: '29px'}], position: 2000, duration: 0 },
                { id: "eid26", tween: [ "transform", "${_left-arm}", "rotateZ", '26deg', { fromValue: '-83deg'}], position: 515, duration: 293 },
                { id: "eid27", tween: [ "transform", "${_left-arm}", "rotateZ", '33deg', { fromValue: '26deg'}], position: 808, duration: 270 },
                { id: "eid28", tween: [ "transform", "${_left-arm}", "rotateZ", '-87deg', { fromValue: '33deg'}], position: 1078, duration: 187 },
                { id: "eid29", tween: [ "transform", "${_left-arm}", "rotateZ", '-87deg', { fromValue: '-87deg'}], position: 1265, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Rectangle}", "border-width", '3px', { fromValue: '3px'}], position: 2000, duration: 0 },
                { id: "eid22", tween: [ "transform", "${_right-arm}", "rotateZ", '-17deg', { fromValue: '89deg'}], position: 500, duration: 293 },
                { id: "eid23", tween: [ "transform", "${_right-arm}", "rotateZ", '0deg', { fromValue: '-17deg'}], position: 793, duration: 270 },
                { id: "eid24", tween: [ "transform", "${_right-arm}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 1063, duration: 187 },
                { id: "eid25", tween: [ "transform", "${_right-arm}", "rotateZ", '88deg', { fromValue: '-14deg'}], position: 1250, duration: 194 },
                { id: "eid62", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Rectangle}", "top", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid46", tween: [ "transform", "${_eyebrows}", "scaleY", '-0.7', { fromValue: '0.7'}], position: 793, duration: 270 },
                { id: "eid49", tween: [ "transform", "${_eyebrows}", "scaleY", '0.69576', { fromValue: '-0.7'}], position: 1545, duration: 225 },
                { id: "eid58", tween: [ "color", "${_Rectangle}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 2000, duration: 0 },
                { id: "eid2", tween: [ "transform", "${_smile-open}", "scaleY", '0.16', { fromValue: '0.32'}], position: 500, duration: 145 },
                { id: "eid3", tween: [ "transform", "${_smile-open}", "scaleY", '0.62', { fromValue: '0.16'}], position: 645, duration: 58 },
                { id: "eid20", tween: [ "transform", "${_smile-open}", "scaleY", '0.74', { fromValue: '0.62'}], position: 703, duration: 90 },
                { id: "eid8", tween: [ "transform", "${_smile-open}", "scaleY", '0.11', { fromValue: '0.74'}], position: 793, duration: 82 },
                { id: "eid19", tween: [ "transform", "${_smile-open}", "scaleY", '0.18', { fromValue: '0.11'}], position: 875, duration: 86 },
                { id: "eid9", tween: [ "transform", "${_smile-open}", "scaleY", '0.73', { fromValue: '0.18'}], position: 961, duration: 147 },
                { id: "eid12", tween: [ "transform", "${_smile-open}", "scaleY", '0.24', { fromValue: '0.73'}], position: 1108, duration: 78 },
                { id: "eid13", tween: [ "transform", "${_smile-open}", "scaleY", '0.73', { fromValue: '0.24'}], position: 1186, duration: 64 },
                { id: "eid11", tween: [ "transform", "${_smile-open}", "scaleY", '0.18', { fromValue: '0.73'}], position: 1250, duration: 67 },
                { id: "eid5", tween: [ "transform", "${_smile-open}", "scaleY", '0.82', { fromValue: '0.18'}], position: 1317, duration: 88 },
                { id: "eid14", tween: [ "transform", "${_smile-open}", "scaleY", '0.09', { fromValue: '0.82'}], position: 1405, duration: 140 },
                { id: "eid15", tween: [ "transform", "${_smile-open}", "scaleY", '0.73', { fromValue: '0.09'}], position: 1545, duration: 101 },
                { id: "eid16", tween: [ "transform", "${_smile-open}", "scaleY", '0.1', { fromValue: '0.73'}], position: 1646, duration: 69 },
                { id: "eid6", tween: [ "transform", "${_smile-open}", "scaleY", '0.76', { fromValue: '0.1'}], position: 1715, duration: 79 },
                { id: "eid18", tween: [ "transform", "${_smile-open}", "scaleY", '0.11', { fromValue: '0.76'}], position: 1794, duration: 89 },
                { id: "eid17", tween: [ "transform", "${_smile-open}", "scaleY", '0.60386', { fromValue: '0.11'}], position: 1883, duration: 117 }            ]
        }
    }
},
"Call_Us": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'BOOK A PROJECT NOW',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'underline', 'italic'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2}": [
                ["style", "font-style", 'italic'],
                ["style", "text-decoration", 'underline'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '196px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Logo_click": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '326px', '99px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '99px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '326px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '326px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid217", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(192,192,192,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,0.00)'}], position: 1000, duration: 0 },
                { id: "eid216", tween: [ "gradient", "${_Rectangle2}", "background-image", [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]], { fromValue: [270,[['rgba(255,255,255,0)',0],['rgba(255,255,255,0)',100]]]}], position: 1000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-104795071");
