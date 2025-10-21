import { z } from "zod";

export const Achievement = z.object({
	storyId: z.string(),
	id: z.string(),
	title: z.string(),
	description: z.string(),
	public: z.boolean(),
});
export type Achievement = z.infer<typeof Achievement>;

export const PlayerAchievement = z.object({
	userId: z.string(),
	storyId: z.string(),
	achievementId: z.string(),
	title: z.string(),
	description: z.string(),
	public: z.boolean(),
	firstEarned: z.string().datetime(),
});
export type PlayerAchievement = z.infer<typeof PlayerAchievement>;
