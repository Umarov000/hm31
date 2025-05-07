const { sendErrorRes } = require("../helpers/send_error_res");
const Author = require("../schemas/Author");
const { authorValidation } = require("../validation/author.validation");

const create = async (req, res) => {
  try {
    const body = req.body;
    const { error, value } = authorValidation(body);
    if (error) {
      return sendErrorRes(error, res);
    }

    const newAuthor = await Author.create(value); 
    res.status(201).send({ message: "New Author added", newAuthor });
  } catch (error) {
    sendErrorRes(error, res);
  }
};

const findAll = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.status(200).send(authors);
  } catch (error) {
    sendErrorRes(error, res);
  }
};
const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById({ id });
    res.status(200).send(author);
  } catch (error) {
    sendErrorRes(error, res);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await Author.findByIdAndUpdate(id, body);
    res.status(200).send({ message: "Author updated successfully" });
  } catch (error) {
    sendErrorRes(error, res);
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await Author.findByIdAndDelete(id);
    res.status(200).send({ message: "Author deleted successfully" });
  } catch (error) {
    sendErrorRes(error, res);
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
