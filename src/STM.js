
class STM {

  constructor(obj) {
    Object.assign(this, obj)
  }

  setState = (NextState, ...args) => {
    this.exit()
    return new NextState(this, ...args)
  }

  exit = () => {}
}

export default STM