import React from "react"
import Rheostat from "rheostat"
// import 'rheostat/css/slider.css';
// import 'rheostat/css/slider-horizontal.css';
// import './Slider.css';

export default class Slider extends React.Component {
  handleChange = sliderState => {
    this.props.onChange("price", sliderState.values)
    this.props.onBlur("price", true)
  }

  render() {
    const { onChange, ...rest } = this.props
    return (
      <div className="slider">
        <label className="label">Daily Spend</label>
        <Rheostat onValuesUpdated={this.handleChange} {...rest} />
        <div className="row">
          <div>
            $ {this.props.values[0]}
          </div>
        </div>
      </div>
    )
  }
}
