import UserService from '../services/UserService.js';

const CreateUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const validEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValidEmail = validEmail.test(email);
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: 'ERR',
        message: 'Please enter all fields',
      });
    }

    if (!isValidEmail) {
      return res.status(200).json({
        status: 'ERR',
        message: 'Email format is incorrect',
      });
    }

    if (password !== confirmPassword) {
      return res.status(200).json({
        status: 'ERR',
        message: 'Passwords must match',
      });
    }
    const response = await UserService.CreateUser(req.body);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const validEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValidEmail = validEmail.test(email);
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: 'ERR',
        message: 'Please enter all fields',
      });
    }

    if (!isValidEmail) {
      return res.status(200).json({
        status: 'ERR',
        message: 'Email format is incorrect',
      });
    }

    const response = await UserService.LoginUser(req.body);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return res.status(200).json({
        status: 'ERR',
        message: 'User ID is required',
      });
    }
    const response = await UserService.UpdateUser(userId, data);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

export default { CreateUser, LoginUser, UpdateUser };
