import Model from '../models/model';

const messageModel = new Model('messages');
export const messagePage = async (req, res) => {
  try {
    const data = await messageModel.select('name, message');
    res.status(200).json({ message: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
