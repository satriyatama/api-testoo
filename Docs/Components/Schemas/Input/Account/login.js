module.exports = {
  Login: {
      type:'object',
      properties: {
      email: {
        type:'string',
        example:'user@gmail.com'
      },
      password: {
        type:'string',
        format:'password',
        example:'12345678',
        minLength:8
      },
    },
    required: [
      'email',
      'password',
    ]
  }
}