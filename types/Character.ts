import { z } from "zod";

export const Character = z.object({
	userId: z.string(),
	id: z.string().uuid(),
	name: z.string().min(1, "Character name is required"),
	avatar: z.string(),
	avatar_base64: z.string().optional(),
});
export type Character = z.infer<typeof Character>;

export const NewCharacter = Character.omit({ userId: true, id: true });
export type NewCharacter = z.infer<typeof NewCharacter>;

export const CharacterId = Character.pick({ userId: true, id: true });
export type CharacterId = z.infer<typeof CharacterId>;
