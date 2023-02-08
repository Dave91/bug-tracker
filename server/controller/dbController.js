import fs from "fs/promises";

export const bugsAll = async (req, res) => {
  try {
    let data = await fs.readFile("./data.json");
    data = JSON.parse(data);
    //console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).send("Error loading data!");
  }
};

export const bugsAdd = async () => {
  let data = await fs.readFile("data.json", {
    encoding: "utf8",
  });
  db = JSON.parse(data);
  return db;
};

export const bugsDel = async () => {
  let data = await fs.readFile("data.json", {
    encoding: "utf8",
  });
  db = JSON.parse(data);
  return db;
};
