import { z } from "zod";
import { GamePlayer } from "./GamePlayer";
import { GameStory } from "./GameStory";

export const GameSessionData = z.object({
	ink: z
		.object({
			id: z.string(),
			metadata: z.object({
				gamemode: z.string(),
			}),
			state: z.string().optional(),
		})
		.optional(),
	story: GameStory.optional(),
	roles_player: z.record(z.string(), z.number()).optional(),
});
export type GameSessionData = z.infer<typeof GameSessionData>;

export const GameSession = z.object({
	id: z.string().uuid(),
	players: z.array(GamePlayer),
	name: z.string().min(1).max(256),
	data: GameSessionData.optional(),
});
export type GameSession = z.infer<typeof GameSession>;
