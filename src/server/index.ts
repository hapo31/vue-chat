import ChatKit from "@pusher/chatkit-server";
import fs from "fs";

const envFile = fs.readFileSync(".env.json");
const env: { instanceLocator: string; key: string } = JSON.parse(
  envFile.toString()
);

const chatKit = new ChatKit({
  instanceLocator: env.instanceLocator,
  key: env.key
});
