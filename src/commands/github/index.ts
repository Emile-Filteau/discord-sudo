import DiscordJS from "discord.js";

export default async (message: DiscordJS.Message, ...args: string[]) => {
    return message.reply(`https://github.com/dciets/discord-sudo`);
};