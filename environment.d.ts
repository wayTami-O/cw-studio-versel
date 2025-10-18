import Next from "next";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BASE_URL: string;
            TOKEN_BOT: string;
            CHAT_ID: string;
        }
    }
}