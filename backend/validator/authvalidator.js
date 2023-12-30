const { z } = require("zod");

const signupSchema = z.object({
    name: z.string({ required_error: "Name is required" }).trim().min(3, { msg: "Name must be 3 Charcter" }).max(255, { msg: "Name must be 255 not more chartcer" }),
    email: z.string({ required_error: "Email is required" }).trim().email({
        email:"Invalid Email address"
    }).min(3, { msg: "Email must be 3 Charcter" }).max(255, { msg: "Email must be 255 not more chartcer" }),
    phonenumber: z.string({ required_error: "Phone is required" }).trim().min(10, { msg: "Phone must be 10 Charcter" }).max(20, { msg: "Phone must be 20 not more chartcer" }),
    password: z.string({ required_error: "Password is required" }).trim().min(7, { msg: "Password must be 8 Charcter" }).max(1024, { msg: "Password must be 1024 not more chartcer" }),
})

module.exports = signupSchema;