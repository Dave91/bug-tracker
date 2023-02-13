import fs from "fs/promises";

export const bugsAll = async (req, res) => {
  try {
    let data = await fs.readFile("./data.json");
    data = JSON.parse(data);
    console.log("Bugs loaded.");
    res.status(200).json(data);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).send("Error loading data!");
  }
};

export const bugsAdd = async (req, res) => {
  try {
    let data = req.body;
    let contents = await fs.readFile("./data.json");
    contents = JSON.parse(contents);
    contents.push(data);
    await fs.writeFile("./data.json", JSON.stringify(contents, null, 2));
    console.log("Bug created.");
    res.status(200).send("New data added.");
  } catch (error) {
    console.log("error: " + error);
    res.status(500).send("Error writing data!");
  }
};

export const bugsDel = async () => {
  let data = await fs.readFile("data.json");
  db = JSON.parse(data);
  return db;
};

export const bugsEdit = async (req, res) => {
  try {
    let newData = await fs.readFile("./data.json");
    newData = JSON.parse(newData);
    newData.push(data);
    await fs.writeFile("./data.json", JSON.stringify(newData, null, 2));
    console.log("Bug updated.");
    //res.status??
  } catch (error) {
    console.log("error: " + error);
    res.status(500).send("Error updating data!");
  }
};
