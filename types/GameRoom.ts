import { z } from "zod";

export const GameRoom = z.object({
	hostId: z.string().uuid(),
	players: z.array(z.string().uuid()),
	invites: z.array(z.string().uuid()),
	public: z.boolean(),
	name: z.string().min(1).max(256),
});
export type GameRoom = z.infer<typeof GameRoom>;
