import React from 'react';
import '../lib/modernizr.js'
import '../lib/stack.js'
import '../lib/stack.css'

class Fancy extends React.Component {
  constructor() {
    super()
    this.state = {
      stack: undefined,
      imgs: undefined,
      postivebtnlabel: undefined,
      negativebtnlabel: undefined,
      postivebtnclass : undefined,
      negativebtnclass : undefined
    }
    this.reject = this.reject.bind(this)
    this.accept = this.accept.bind(this)
    this.onEndStack = this.onEndStack.bind(this)
  }

  componentDidMount() {
    let stack = new Stack(document.getElementById('stack'));
    stack.options.infinite = this.state.infinite
    stack.options.onEndStack = this.onEndStack
    this.setState({stack: stack})
  }

  componentWillMount() {
    this.setState({
      imgs: this.props.images,
      postivebtnlabel: this.props.postivebtnlabel || 'Yes',
      negativebtnlabel: this.props.negativebtnlabel || 'No',
      postivebtnclass : this.props.postivebtnclass || '',
      negativebtnclass : this.props.negativebtnclass || '',
      query : this.props.query || undefined,
      queryclass : this.props.queryclass || '',
      imgclass : this.props.imgclass || '',
      effect : this.props.effect || 'krisna',
      infinite : this.props.infinite || false
    })
  }

  onEndStack() {
    this.props.onstackendfn()
  }

  reject() {
    let stack = this.state.stack
    stack.reject()
  }

  accept() {
    let stack = this.state.stack
    stack.accept()
  }

  render() {
    const elementType = this.props.elementType;
    const renderCard = () => {
      alert('here');
      switch (elementType) {
        case 'image':
          console.log('image');
          break;
        case 'text':
          console.log('text');
          break;
      }
    }
    return (
      alert('react cards'));
  }
}

export default Fancy;
