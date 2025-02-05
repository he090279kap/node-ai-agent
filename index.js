import readline from "readline";
import { chatWithAI } from "./config.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🤖 AI Agent запущен! Напишите 'exit' для выхода.");

rl.prompt();

rl.on("line", async (input) => {
  if (input.toLowerCase() === "exit") {
    console.log("👋 До свидания!");
    rl.close();
  } else {
    const response = await chatWithAI(input);
    console.log(`🤖 AI: ${response}`);
    rl.prompt();
  }
});
