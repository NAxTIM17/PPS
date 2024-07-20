import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(1, 'Name Is Required'),
  email: z.string().email('Invalid Email Address'),
  password: z.string().min(6, 'Password Must Be At Least 6 Characters Long'),
});

type UserInput = z.infer<typeof UserSchema>;

export type { UserInput };
export { UserSchema };
