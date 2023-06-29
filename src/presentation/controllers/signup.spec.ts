import { SignUpController } from './signup'

describe('SignUp Controller',() => {
  test('Should return 400 if no name is provider', () => {
    //expect(1).toBe(1)
    const sut = new SignUpController()
    const httpRequest = {
      body:{
        //name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})