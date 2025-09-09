import { readFileSync } from "fs";

const args = process.argv.slice(2);
const filename = args[0];
const searchString = args[1];

const contents = readFileSync(filename, "utf8");
//only works on text files

const lines = contents.split("\n");

for(let i = 0; i < lines.length; i++)
{
    if (lines[i].includes(searchString))
    {
        console.log(lines[i]);
    }
}