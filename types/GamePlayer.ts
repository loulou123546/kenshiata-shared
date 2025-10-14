import { z } from "zod";

export const GamePlayerData = z.object({
	storyVote: z.string().optional(),
	choiceVote: z.number().optional(),
	avatar: z.string().optional(),
	character_name: z.string().optional(),
	character_id: z.string().optional(),
});
export type GamePlayerData = z.infer<typeof GamePlayerData>;

export const GamePlayer = z.object({
	socketId: z.string(),
	userId: z.string(),
	username: z.string(),
	data: GamePlayerData.optional(),
});
export type GamePlayer = z.infer<typeof GamePlayer>;
