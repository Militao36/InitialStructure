import Joi from 'joi'
import { ClienteEntity } from '../../entity/ClienteEntity'

class ValidationSave {
  static handle (data: ClienteEntity) {
    const schema = Joi.object(
      {
        nome: Joi.string().required().max(100),
        cpfCnpj: Joi.string().max(20).allow(null),
        email: Joi.string().email().max(100).allow(null),
        dataNascimento: Joi.date().allow(null),
        descricao: Joi.string().max(50).allow(null)
      }
    )

    const erros = schema.validate(data)
    console.log(erros)
  }
}

export { ValidationSave }