import { z } from "zod";

export const Story = z.object({
	id: z.string().uuid(),
	name: z.string().min(1, "Story name is required"),
	authorId: z.string().uuid(),
	author: z.string(),
	lastUpdated: z.string().datetime(),
	public: z.boolean(),
	ink: z.string(),
});
export type Story = z.infer<typeof Story>;

export const CreateStory = Story.pick({
	name: true,
	authorId: true,
	author: true,
});
export type CreateStory = z.infer<typeof CreateStory>;

export const EditStory = Story.omit({
	authorId: true,
	author: true,
	lastUpdated: true,
});
export type EditStory = z.infer<typeof EditStory>;

export const StoryWithoutInk = Story.omit({ ink: true });
export type StoryWithoutInk = z.infer<typeof StoryWithoutInk>;

export const Stories = z.array(Story.omit({ ink: true }));
export type Stories = z.infer<typeof Stories>;
