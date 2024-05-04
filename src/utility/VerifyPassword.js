const bcrypt = require('bcrypt');

const VerifyPassword = async (plainPassword, hashedPassword) => {
  try {
    // Compare the plain password with the hashed password
    console.log(plainPassword, hashedPassword);

    return match;
  } catch (error) {
    // Handle any errors that occur during password comparison
    throw new Error('Error comparing passwords');
  }
};

export default VerifyPassword;
