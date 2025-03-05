import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s home appliance AI assistant.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `It appears that your genie needs to take a break. Check back later to get the answer to that question!`;
export const WORD_CUTOFF: number = 5000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
