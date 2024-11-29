export default {
	APP_PROMPT:
		'En las imágenes se muestran catálogos de productos farmacéuticos. Cada producto tiene su nombre, el nombre del laboratorio que lo produce y un precio. Además, se encuentra visible el nombre de la droguería que ofrece estos productos y, a veces, fechas de inicio y/o fin de la promoción/oferta. Extraé esta información y volcala en un objecto con formato JSON siguiendo SOLO esta estructura: {drogueria:string;productos:{nombre:string;laboratorio:string;precio:number;}[];oferta_valida?:{inicio?:Date;fin?:Date;}}. Analizá cada imágen por separado, asegurate de que ningún valor sea omitido y respondé con SOLO el JSON. Omite aquellos productos que no puedan cumplir con la estructura requerida.',
	APP_PROMPT_TOKENS_REQUIRED: 161,
} as const;
