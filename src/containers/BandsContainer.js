import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band} />)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: 'ADD_BAND', payload: name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
