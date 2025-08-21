import { z } from "zod";

export const StoryLine = z.object({
	text: z.string(),
	tags: z.array(z.string()),
});
export type StoryLine = z.infer<typeof StoryLine>;

export const Storychoice = z.object({
	text: z.string(),
	index: z.number(),
	tags: z.array(z.string()),
});
export type Storychoice = z.infer<typeof Storychoice>;

export const StorySituation = z.object({
	lines: z.array(StoryLine),
	choices: z.array(Storychoice),
});
export type StorySituation = z.infer<typeof StorySituation>;
