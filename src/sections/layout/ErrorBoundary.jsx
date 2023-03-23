import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError (error) {
    return { error }
  }

  promiseRejectionHandler = (event) => {
    this.setState({
      error: event.reason
    })
  }

  componentDidCatch (error, info) {
    console.error('Uncaught error:', error, info)
  }

  componentDidMount () {
    // Add an event listener to the window to catch unhandled promise rejections & stash the error in the state
    window.addEventListener('unhandledrejection', this.promiseRejectionHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('unhandledrejection', this.promiseRejectionHandler)
  }

  resetError () {
    this.setState({ error: null })
  }

  render () {
    if (this.state.error) {
      return (
        <>
            <h2>Oopss...This is embarrassing for us. An error has occurred, please return to the homepage by clicking <Link onClick={this.resetError} to={'/'}>here</Link></h2>
        </>
      )
    }

    return this.props.children
  }
}
