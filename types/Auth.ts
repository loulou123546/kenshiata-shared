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

export const SignupRequest = z.object({
	username: z.string(),
	password: z.string(),
	email: z.string().email(),
	turnstileToken: z.string(),
});
export type SignupRequest = z.infer<typeof SignupRequest>;

export const SignupResponse = z.object({
	userId: z.string().optional(),
	success: z
		.object({
			confirmed: z.boolean(),
			session_id: z.string(),
		})
		.optional(),
	continue: z
		.object({
			code_sent: z.boolean(),
			code_sent_via: z.string(),
			code_sent_to: z.string(),
			session_id: z.string(),
		})
		.optional(),
	error: z.string().optional(),
});
export type SignupResponse = z.infer<typeof SignupResponse>;

export const ConfirmSignupRequest = z.object({
	username: z.string(),
	session_id: z.string(),
	code: z.string(),
});
export type ConfirmSignupRequest = z.infer<typeof ConfirmSignupRequest>;
