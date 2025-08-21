import { z } from "zod";

export const UserIdentity = z.object({
	id: z.string().uuid(),
	username: z.string().min(3),
	groups: z.array(z.string()),
});
export type UserIdentity = z.infer<typeof UserIdentity>;
