import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import Button from '../../components/Button'

const FormWrapper = styled.View`
  position: absolute;
  top: 24px;
  right: 16px;
  left: 16px;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 4px;
`

const TextInput = styled.TextInput`
  height: 50px;
  padding: 8px 16px;
  font-size: 16px;
`

const Line = styled.View`
  height: 1px;
  background-color: #eeeeee;
`

export default class FormSearch extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool
  }

  state = {
    origin: '',
    destination: ''
  }

  handleChangeInput(key, textValue) {
    this.setState({
      [key]: textValue
    })
  }

  handlePressSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <FormWrapper>
        <TextInput
          placeholder="Origin"
          value={this.state.origin}
          onChangeText={this.handleChangeInput.bind(this, 'origin')}
        />
        <Line />
        <TextInput
          placeholder="Destination"
          returnKeyType="done"
          value={this.state.destination}
          onChangeText={this.handleChangeInput.bind(this, 'destination')}
        />
        <Button
          onPress={this.handlePressSubmit.bind(this)}
          isLoading={this.props.isLoading}
        >
          Route
        </Button>
      </FormWrapper>
    )
  }
}
