interface TemplateValues {
	mainLink: string;
	fallbackLink: string;
	name?: string;
}

export default function ({
	mainLink,
	fallbackLink,
	name,
}: TemplateValues): string {
	return `
        <body style="font-family: sans-serif;">
            <div>
                <h1 style="color: #3b634c; font-weight: bold; font-style: italic">
                    ADvenir
                </h1>
                <h2 style="color: #1e1e1e; font-weight: medium">Recupere su cuenta</h2>
            </div>
            <div>
                <p style="color: #1e1e1e">
                ${!name ? `Hola,` : `Hola ${name},`}
                </p>
                <p style="color: #1e1e1e">
                ingrese a
                <a
                    href="${mainLink}"
                    style="font-weight: bold; text-decoration: underline; color: #4e8263"
                    >este link</a
                >
                para poder restablecer su contraseña.
                </p>
            </div>
            <div style="margin-top: 1rem">
                <p style="max-width: 40ch; color: #1e1e1e">
                Si usted no solicitó una recuperación de cuenta, haga click
                <a
                    href="${fallbackLink}"
                    style="font-weight: bold; text-decoration: underline; color: #4e8263"
                    >aquí</a
                >, o ignore este correo.
                </p>
            </div>
        </body>
    `;
}
