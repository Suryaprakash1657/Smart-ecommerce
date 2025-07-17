import User from '../models/User.js';
import { generateToken} from '../utils/generateToken.js';
export const registerUser=async(req,res)=>{
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const user = await User.create({ username, email, password });
  if (user) {
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};