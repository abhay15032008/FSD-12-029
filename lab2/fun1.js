
import { writeFile , appendFile,readFile } from "fs/promises";
//await writeFile("hello.txt", "JS is easy");
// await appendFile("hello.txt", " \n is much easy than others ");
 await appendFile("hello.txt", " \n Abhay singh 😍 ");
const content=await readFile("hello.txt" , "utf-8");
console.log(content);
