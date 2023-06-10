import fs from "fs";
import csv from "csvtojson";
import { Parser } from "json2csv";
import gurmukhiUtils from "gurmukhi-utils";

(async () => {
  const flashcards = await csv({ delimiter: "\t" }).fromFile(
    "3000PunjabiWords-Gurmukhi.csv"
  );

  for (let i = 0; i < flashcards.length; i++) {
    const gurmukhiTranslation = flashcards[i]["punjabi word"];
    const shahmukhiTranslation = gurmukhiUtils.toShahmukhi(gurmukhiTranslation);

    flashcards[i][
      "punjabi word"
    ] = `${gurmukhiTranslation}\n${shahmukhiTranslation}`;
  }

  const newCSV = new Parser().parse(flashcards);
  fs.writeFileSync("3000PunjabiWords", newCSV);
})();
