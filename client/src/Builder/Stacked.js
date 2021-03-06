import React, {Component} from "react";
import './Stacked.css';

import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-basic';
const PlotlyStacked = createPlotlyComponent(Plotly);

class Stacked extends Component {

  constructor(props) {
    super(props)
    this.state = {
      generate: false,
      adjustedData: []
    }
  };

  componentWillMount() {
  }

  // stackedArea(traces) {
  //
  //   if(traces.length === 31) {
  //     for (var i = 1; i < traces.length; i++) {
  //       for (var j = 0; j < (Math.min(traces[i]['y'].length, traces[i - 1]['y'].length)); j++) {
  //         traces[i]['y'][j] += traces[i - 1]['y'][j];
  //       }
  //     }
  //     // console.log(traces)
  //     // console.log("traces")
  //     var investment = Array(traces[0]['x'].length).fill(this.props.investment);
  //     traces.push({
  //       'x': traces[0]['x'],
  //       'y': investment,
  //       'name': 'investment',
  //       'line': {
  //         'shape': "spline"
  //       }
  //     })
  //     // console.log(traces)
  //     // console.log(traces.length)
  //     return traces;
  //
  //   } else if (traces.length === 32) {
  //     return traces
  //   }
  // }

  render() {
    var data = this.props.histVisData
    // console.log(this.props.coins.length - 2)

    let layout = {
      title: this.props.exchange + " with " + this.props.histVisData.length + " coins", // more about "layout.title": #layout-title
      showlegend: true,
      font: {
        'color':'rgb(0,128,0)'
      },
      xaxis: {
        type: 'date',
        calendar: 'gregorian',
        showspikes: false
      },
      yaxis: {
        tickprefix: "$",
        ticksuffix: " USD",
        showspikes: false,
        tickangle: '45'
      },
      plot_bgcolor: 'rgb(33,33,33)',
      paper_bgcolor: 'rgb(0, 0, 0)',
      autosize: true,
      hovermode: 'closest',
      border: 'none',
      annotations: [
        // {
        //   text: 'simple annotation',
        //   x: '2017-08-23',
        //   xref: 'paper'
        // }
      ]
    };
    let config = {
      showLink: true,
      displayModeBar: true
    };

    if (data.length >= 31) {
      // this.stackedArea()
      return (
        <div className="Stacked">
          <div className="stackedOptions">
            <form action="" className="form">
              <div className="stackedOption"><input type="radio" name="stacked" value="stack"/>Stacked</div>
              <div className="stackedOption"><input type="radio" name="investment" value="investment"/>Show Investment</div>
              <div className="stackedOption"><input type="radio" name="delta" value="delta"/>Delta</div>
            </form>
          </div>
          <div id="chartArea">
            <PlotlyStacked className="whatever" data={data} layout={layout} config={config}/>
          </div>
        </div>
      );
    } else {
      return (
        <div id="loader">
          <img src="https://cdn.dribbble.com/users/583436/screenshots/1698964/3cols.gif" className="loading" role="presentation"/>
        </div>
      )
    }
  }
}

export default Stacked;
