
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db"; //  mongodb client
import { jwt } from "better-auth/plugins";

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
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google"],
            requireLocalEmailVerified: false,
            updateUserInfoOnLink: true
        }
    },
    plugins: [
        jwt({
            secret: process.env.JWT_SECRET,
            // Add this to map the user's role into the JWT
            jwt: {
                payload: ({ user }) => {
                    return {
                        role: user.role,
                        isBanned: user.isBanned,
                    };
                },
            },
        })
    ],
    session: {
        schema: {
            // This ensures the properties are explicitly recognized during session lookups
            role: "string",
            isBanned: "boolean"
        }
    }

});