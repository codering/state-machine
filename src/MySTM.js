
import STM from './STM'

class MySTM extends STM {

  constructor(obj) {
    super(obj)
  }

  handleToggleButton = () => {
    console.log('MySTM ==> handleToggleButton')
  }
}

export default MySTM