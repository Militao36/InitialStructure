import { Logger } from 'pino'

class HealtcheckService {
  private logger: Logger

  constructor ({ logger }) {
    this.logger = logger
  }

  healtCheck () {
    this.logger.info('HealtCheck')

    return {
      healt: true
    }
  }
}

export { HealtcheckService }
