import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import JwtService from './JwtService.js';

const CreateUser = async (newUser) => {
  const { name, email, password, phone } = newUser;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return {
        status: 'ERR',
        message: 'This email is already existed',
      };
    }

    const hashPassword = await bcrypt.hashSync(password, 10);

    const createdUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
    });

    return {
      status: 'OK',
      message: 'User created successfully',
      data: createdUser,
    };
  } catch (err) {
    throw new Error(`Failed to create user: ${err.message}`);
  }
};

const LoginUser = async (UserLogin) => {
  const { name, email, password, phone } = UserLogin;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return {
        status: 'ERR',
        message: 'Username not found',
      };
    }

    const comparePassword = await bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return {
        status: 'ERR',
        message: 'Password is incorrect',
      };
    }

    const access_token = await JwtService.GenerateAccessToken({
      id: user.id,
      isAdmin: user.isAdmin,
    });

    const refresh_token = await JwtService.GenerateRefreshToken({
      id: user.id,
      isAdmin: user.isAdmin,
    });

    return {
      status: 'OK',
      message: 'Login successfully',
      access_token,
      refresh_token,
    };
  } catch (err) {
    throw new Error(`Failed to login user: ${err.message}`);
  }
};

const UpdateUser = async (UserId, data) => {
  try {
    const updateUser = await User.findByIdAndUpdate(UserId, data, {
      new: true,
    });

    if (!updateUser) {
      return {
        status: 'ERR',
        message: 'Username not found',
      };
    }

    return {
      status: 'OK',
      message: 'Update successfully',
      user: updateUser,
    };
  } catch (err) {
    throw new Error(`Failed to update user: ${err.message}`);
  }
};

export default { CreateUser, LoginUser, UpdateUser };
