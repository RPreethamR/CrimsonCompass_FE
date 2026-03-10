import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ServerConfig } from "@/app.config";

const backendUrl = `${ServerConfig.backendUrl}/api`;

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        token: { label: "Token", type: "text" },
      },
      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          try {
            const response = await fetch(`${backendUrl}/users/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            });

            const data = await response.json();

            if (!response.ok) {
              throw new Error(data.message || "Authentication failed");
            }

            return {
              id: data.data.userId.toString(),
              email: data.data.email,
              name: `${data.data.firstName} ${data.data.lastName}`,
              role: data.data.role,
              profilePicture: data.data.profilePicture,
              phoneNumber: data.data.phoneNumber,
              accessToken: data.accessToken,
            };
          } catch (error) {
            console.error("Auth error:", error);
            throw new Error("Authentication failed");
          }
        }

        if (credentials?.token) {
          try {
            const response = await fetch(`${backendUrl}/auth/validate-token`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${credentials.token}`,
              },
            });

            const text = await response.text();
            if (!text) {
              throw new Error("Empty response from server");
            }

            const data = JSON.parse(text);

            if (!response.ok) {
              throw new Error(
                data.message ||
                `Token verification failed (HTTP ${response.status})`
              );
            }

            return {
              id: data.userId,
              email: data.email,
              name: data.name,
              role: data.role,
              profilePicture: data.profilePicture,
              accessToken: credentials.token,
            };
          } catch (error) {
            console.error("Token verification error:", error);
            throw new Error("Token verification failed");
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };

