export const initialFlows = [
    {
        "id": "LDRttVxe",
        "name": "Example flow",
        "nodes": [
            {
                "id": "2xjjQ1Ha",
                "type": "landing",
                "position": {
                    "x": -4.285714285714263,
                    "y": 80.71428571428568
                },
                "data": {
                    "label": "Landing page",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 93
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "Q0l8PLwh",
                "type": "register",
                "position": {
                    "x": 297.1428571428571,
                    "y": -3.5714285714285623
                },
                "data": {
                    "label": "Register",
                    "color": "sky"
                },
                "measured": {
                    "width": 82,
                    "height": 98
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "0HNiNGuX",
                "type": "thankyou",
                "position": {
                    "x": 490,
                    "y": 94.28571428571432
                },
                "data": {
                    "label": "Thank You",
                    "color": "gray"
                },
                "measured": {
                    "width": 82,
                    "height": 91
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "nVHtyMaI",
                "type": "callToAction",
                "position": {
                    "x": 134.28571428571433,
                    "y": 74.28571428571432
                },
                "data": {
                    "label": "CTA",
                    "color": "green"
                },
                "measured": {
                    "width": 82,
                    "height": 109
                },
                "selected": false,
                "dragging": false
            },
            {
                "id": "FGkagyfj",
                "type": "website",
                "position": {
                    "x": 295.7142857142857,
                    "y": 174.2857142857143
                },
                "data": {
                    "label": "Free resource",
                    "color": "orange"
                },
                "measured": {
                    "width": 82,
                    "height": 89
                },
                "selected": false,
                "dragging": false
            }
        ],
        "edges": [
            {
                "source": "Q0l8PLwh",
                "target": "0HNiNGuX",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "sky",
                    "strokeWidth": 1,
                    "pathStyle": "smooth"
                },
                "id": "xy-edge__Q0l8PLwh-0HNiNGuX",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#38bdf8"
                },
                "label": "New user"
            },
            {
                "source": "2xjjQ1Ha",
                "target": "nVHtyMaI",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "gray",
                    "strokeWidth": 1
                },
                "id": "xy-edge__2xjjQ1Ha-nVHtyMaI"
            },
            {
                "source": "nVHtyMaI",
                "target": "Q0l8PLwh",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "sky",
                    "strokeWidth": 1
                },
                "id": "xy-edge__nVHtyMaI-Q0l8PLwh",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#38bdf8"
                }
            },
            {
                "source": "nVHtyMaI",
                "target": "FGkagyfj",
                "type": "custom",
                "animated": true,
                "data": {
                    "color": "orange",
                    "strokeWidth": 1
                },
                "id": "xy-edge__nVHtyMaI-FGkagyfj",
                "selected": false,
                "markerEnd": {
                    "type": "arrowclosed",
                    "width": 20,
                    "height": 20,
                    "color": "#f87171"
                }
            }
        ],
        "group": null,
        "updatedAt": 1733406396815
    }
]