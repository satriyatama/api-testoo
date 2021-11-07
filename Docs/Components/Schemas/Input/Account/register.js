
module.exports = {
  Register: {
    type:'object',
    properties: {
      fullName: {
        type:'string',
        example: 'John'
      },
      email: {
        type:'string',
        format:'email',
        example:'johndoe@gmail.com'
      },
      occupation: {
        type:'string',
        example:'student'
      },
      password: {
        type:'string',
        format:'password',
        example:'12345678',
        minLength:8
      },
      passwordConfirmation: {
        type:'string',
        format:'password',
        example:'12345678',
        minLength:8
      },
      phone: {
        type: 'string',
        example: '081234546'
      },
      country: {
        type:'string',
        example:'Indonesia'
      },
      city: {
        type:'string',
        example:'Jakarta'
      },
      gender: {
        type:'string',
        enum: [
          'Male',
          'Female',
          'Other',
          'Prefer not to say'
        ],
        example:'Male'
      },
    },
    required: [
      'fullName',
      'email',
      'password',
      'passwordConfirmation',
      'phone',
      'occupation',
      'country',
      'city',
      'gender',
    ]
  }
}