import { z } from "zod";
import { UserIdentity } from "./User";

export const SocketIdentity = z.object({
	socketId: z.string(),
	user: UserIdentity,
	gameSession: z.string().optional(),
});
export type SocketIdentity = z.infer<typeof SocketIdentity>;

export const SocketDB_userKey = z.object({
	id: z.string(),
	socketId: z.string(),
	user: UserIdentity,
	gameSession: z.string().optional(),
});
export type SocketDB_userKey = z.infer<typeof SocketDB_userKey>;
export const SocketDB_socketKey = z.object({
	id: z.string(),
	user: UserIdentity,
	gameSession: z.string().optional(),
});

export const SocketDB = SocketDB_userKey.or(SocketDB_socketKey);
export type SocketDB = z.infer<typeof SocketDB>;
