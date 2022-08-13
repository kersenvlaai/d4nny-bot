import { config } from "dotenv";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

import { commands } from "../constants/commands.js";

config();
const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

let inputName;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({ version: "10" }).setToken(TOKEN);

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    console.log("hello");
    interaction.reply({
      content: `<:danny11:1008130310220816447> <:danny12:1008130312338948096> <:danny13:1008130313773400146>
<:danny21:1008130315585335296> <:danny22:1008130316738756638> <:danny23:1008130317816713371>
<:danny31:1008130319469269072> <:danny32:1008130320773685308> <:danny33:1008130321985843230>
      `,
    });
  }
});

async function main() {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();
