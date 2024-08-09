import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const GenerateAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: '1h' }
  );
  return access_token;
};

const GenerateRefreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: '365d' }
  );
  return refresh_token;
};

export default { GenerateAccessToken, GenerateRefreshToken };
