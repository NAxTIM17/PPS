import { z } from 'zod';
import messages from '../config/messages';

const UserSchema = z.object({
	name: z.string().optional(),
	email: z.string().email(messages.INVALID_EMAIL_ADDRESS),
	password: z.string().min(6, messages.PASSWORD_CONSTRAINT),
});

const OptionalUserSchema = z.object({
	name: z.string().optional(),
	email: z.string().email(messages.INVALID_EMAIL_ADDRESS).optional(),
	password: z.string().min(6, messages.PASSWORD_CONSTRAINT).optional(),
});

type UserInput = z.infer<typeof UserSchema>;
type OptionalUserInput = Partial<UserInput>;

export { UserInput, UserSchema, OptionalUserInput, OptionalUserSchema };
