import React from 'react'
import styled from 'styled-components/native'
import MapView from './MapView'
import FormSearch from './FormSearch'
import { getDirectionData, decodePopyline } from '../../api/direction'
import DirectionInfo from './DirectionInfo'

const HomeWrapper = styled.View`
  flex: 1;
  position: relative;
`

export default class HomeScreen extends React.Component {
  state = {
    isLoading: false,
    direction: {
      coords: [],
      origin: {
        text: '',
        latitudeDelta: '',
        longitudeDelta: ''
      },
      destination: {
        text: '',
        latitudeDelta: '',
        longitudeDelta: ''
      },
      distance: 0,
      duration: 0
    },
    haveDirection: false,
    searchData: {
      origin: '',
      destination: ''
    }
  }

  async handleChangeSearch(searchData) {
    this.setState({ searchData, isLoading: true })
    const resJson = await getDirectionData({
      origin: searchData.origin,
      destination: searchData.destination
    })
    if (resJson.routes.length > 0) {
      let routeFirst = resJson.routes[0]
      let leg = routeFirst.legs[0]

      let direction = {
        coords: decodePopyline(routeFirst.overview_polyline.points),
        
        origin: {
          text: leg.start_address,
          latitudeDelta: leg.start_location.lat,
          longitudeDelta: leg.start_location.lng
        },
        destination: {
          text: leg.end_address,
          latitudeDelta: leg.end_location.lat,
          longitudeDelta: leg.end_location.lng
        },
        distance: leg.distance,
        duration: leg.duration
      }
      this.setState({ direction, isLoading: false, haveDirection: true })
    } else {
      alert('Location not found, Please Try Again.')
      this.setState({
        isLoading: false,
        haveDirection: false
      })
    }
  }

  render() {
    return (
      <HomeWrapper>
        <MapView
          haveDirection={this.state.haveDirection}
          coords={this.state.direction.coords}
        />
        <FormSearch
          isLoading={this.state.isLoading}
          onSubmit={this.handleChangeSearch.bind(this)}
        />
        {this.state.haveDirection && (
          <DirectionInfo
            onConfirm={() =>
              this.props.navigation.navigate('directionPending', {
                direction: this.state.direction
              })
            }
            duration={this.state.direction.duration}
            distance={this.state.direction.distance}
          />
        )}
      </HomeWrapper>
    )
  }
}