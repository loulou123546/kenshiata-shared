import { z } from "zod";

export const GameStory = z.object({
	id: z.string().uuid(),
	name: z.string().min(1).max(256),
});
export type GameStory = z.infer<typeof GameStory>;

export const GameStoryMetadata = z.object({
	id: z.string().uuid(),
	title: z.string().optional(),
	roles: z.array(
		z.object({
			tag: z.string(),
			name: z.string(),
		}),
	),
});
export type GameStoryMetadata = z.infer<typeof GameStoryMetadata>;
