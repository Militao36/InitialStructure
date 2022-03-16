import { HealtcheckService } from '../../src/services/healtcheck.service'

describe('#healtService', () => {
  let healtService: HealtcheckService

  beforeEach(() => {
    // com o IoC só injetar qualquer Objeto simples em js e vai funcionar
    const logger = {
      info () { }
    }

    healtService = new HealtcheckService({ logger })
  })

  test('#healtCheck', () => {
    const data = healtService.healtCheck()
    expect(data).toEqual({
      healt: true
    })
  })
})
