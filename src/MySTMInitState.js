import MySTM from './MySTM'
import MySTMAnotherState from './MySTMAnotherState'

class MySTMInitState extends MySTM {

  constructor(props) {
      super(props)
  }

  handleToggleButton = () => {
    console.log('MySTMInitState ==> handleToggleButton')
    return this.setState(MySTMAnotherState)
  }

}

export default MySTMInitState