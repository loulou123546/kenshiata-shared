import { z } from "zod";

export const LoginRequest = z.object({
	username: z.string(),
	password: z.string(),
});
export type LoginRequest = z.infer<typeof LoginRequest>;

export const LoginResponse = z.object({
	success: z
		.object({
			id_token: z.string(),
			access_token: z.string(),
			refresh_token: z.string(),
		})
		.optional(),
	continue: z
		.object({
			challenge: z.string(),
			session_id: z.string(),
		})
		.optional(),
	error: z.string().optional(),
});
export type LoginResponse = z.infer<typeof LoginResponse>;
