export default {
  userProfile: 'users', // where profiles are stored in database
  profileParamsToPopulate: [ 'battles:battles' ],
  profileFactory: (user) => { // how profiles are stored in database
    return {
      email: user.email,
      photo: user.photoURL,
      name: user.displayName
    }
  }
}