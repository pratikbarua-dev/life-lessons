
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db"; // your mongodb client

const db = client.db("life-lessons");
export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    baseURL: process.env.BETTER_AUTH_URL,
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "user",
                required: true,
            },
            isBanned: {
                type: "boolean",
                defaultValue: false,
                required: true,
            },
        }
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

});