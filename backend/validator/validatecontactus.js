const { z } = require("zod");

const contactSchema = z.object({
    firstname: z.string({ required_error: "First Name is required" }).trim().min(3, { msg: "First name must be 3 Charcter" }).max(255, { msg: "first name must be 255 not more chartcer" }),

    lastname: z.string({ required_error: "last name is required" }).trim().min(3, { msg: "last name must be 3 Charcter" }).max(255, { msg: "last name must be 255 not more chartcer" }),

    email: z.string({ required_error: "Email is required" }).trim().email({
        email:"Invalid Email address"
    }).min(3, { msg: "Email must be 3 Charcter" }).max(255, { msg: "Email must be 255 not more chartcer" }),

    phonenumber: z.string({ required_error: "Phone is required" }).trim().min(10, { msg: "Phone must be 10 Charcter" }).max(20, { msg: "Phone must be 20 not more chartcer" }),

    message: z.string({ required_error: "Message is required" }).trim().min(3, { msg: "Message must be 3 Charcter" }).max(1024, { msg: "Message must be 1024 not more chartcer" }),
})

module.exports = contactSchema;