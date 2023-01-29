import Bug from "../model/bugsModel.js";

export const bugsAll = async (req, res) => {
  try {
    let result = await Bug.findAll();
    res.json(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const bugsAdd = async (req, res) => {
  try {
    await Bug.create(req.body);
    res.json({ message: "Bug created." });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const bugsDel = async (req, res) => {
  try {
    await Bug.destroy({ where: { id: req.params.id } });
    res.json({ message: "Bug removed." });
  } catch (error) {
    res.json({ message: error.message });
  }
};
