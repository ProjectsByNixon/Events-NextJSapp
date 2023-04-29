import z from "zod";

const schema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string(),
	location: z.string(),
	date: z.string(),
	image: z.string(),
	isFeatured: z.boolean(),
});

export default schema;
