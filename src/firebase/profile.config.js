export default {
  userProfile: 'users', // where profiles are stored in database
  profileFactory: (user) => { // how profiles are stored in database
    return {
      email: user.email,
      photo: user.photoURL,
      name: user.displayName
    }
  }
}