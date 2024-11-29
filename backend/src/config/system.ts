export default {
	APP_PROMPT:
		'En la imágen o texto que te paso se encuentra un catálogo de productos farmacéuticos. Cada producto tiene su nombre, el nombre del laboratorio que lo produce y un precio. Además, se encuentra visible el nombre de la droguería que ofrece estos productos y, a veces, fechas de inicio y/o fin de la promoción/oferta. Extraé esta información y volcala en un objecto con formato JSON siguiendo SOLO esta estructura: {drogueria:string;productos:{nombre:string;laboratorio:string;precio:number;}[];oferta_valida?:{inicio?:Date;fin?:Date;}}. Asegurate de que ningún valor sea omitido y respondé con SOLO el JSON. En caso de faltar un valor, asigna uno que cumpla con el tipado.',
	APP_PROMPT_TOKENS_REQUIRED: 158,
} as const;
