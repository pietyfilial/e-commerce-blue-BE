import UserService from '../services/UserService.js';

const CreateUser = async (req, res) => {
  try {
    console.log(req.body);
    const res = await UserService.createUser();
    return res.status(200).json(res);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

export default { CreateUser };
