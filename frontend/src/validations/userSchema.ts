import {z} from "zod";
//why this is and recover is an object??
/*
export const loginSchema = z.object({
    email: z
    .string({
        required_error: "Este campo es obligatorio",
        invalid_type_error: "Email debe ser una cadena de texto"
    })
    .email({
        message: "Por favor ingrese un Email válido"
    })
    .trim()
    .toLowerCase(),
    
    password: z
    .string({
        required_error: "Este campo es obligatorio"
    })
    .trim()
})
*/

const emailSchema = z
    .string({
        required_error: "Este campo es obligatorio",
        invalid_type_error: "Email debe ser una cadena de texto"
    })
    .email({
        message: "Por favor ingrese un Email válido"
    })
    .trim()
    .toLowerCase()

const passwordSchema = z
    .string()
    .min(8, {
        message: "La contraseña debe tener un mínimo de 8 carácteres"
    })
    .max(20, {
        message: "La contraseña debe tener un máximo de 20 carácteres"
    })
    .refine((password) => /[A-Z]/.test(password), {
        message: "La contraseña debe contener mayúsculas"
    })
    .refine((password) => /[a-z]/.test(password), {
        message: "La contraseña debe contener minúsculas"
    })
    .refine((password) => /[0-9]/.test(password), {
        message: "La contraseña debe contener números"
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
        message: "La contraseña no debe contener carácteres especiales"
    })
//why is there an object here too??
const confirmPasswordSchema = z
    .object({
        password: passwordSchema,
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"]
    })
/*
XX
const reviewPassword = z
    .refine((password) => password === passwordSchema, {
        message: "Las contraseñas no coinciden",
    })
*/
/*
example
export const updatePasswordSchema = z
  .object({
    currentPassword: z.string(),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: passwordMismatchErrorMessage,
    path: ['confirmPassword'],
  });
*/

const loginPasswordSchema = z
    .string({
        required_error: "Este campo es obligatorio"
    })
    .trim()

export const signInSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema
})

export const logInSchema = z.object({
    email: emailSchema,
    password: loginPasswordSchema
})

export const recoverAccountSchema = z.object({
    email: emailSchema
    /*
    if this email does not exist, something like:
    .refine(async(email) => await !(emailExists(email)), {
        message: "Este correo no existe"
    })
    */
})

/*
Can loginSchema be used instead?
export const loginRecoverAccountSchema = z.object({
    email: z.string().email({
        message: "Por favor ingrese un Email válido"
    }),
    password: z.string().min(14, {
        message: "La contraseña debe tener un mínimo de 16 carácteres"
    })
})
*/