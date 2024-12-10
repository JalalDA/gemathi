import prisma from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
    
        if (user) {
          return {
            id: user.id,
            email: user.email,
            image : user.image,
            role: user.role, // Pastikan role dikembalikan di sini
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Jika ada user baru (saat login), tambahkan properti role ke token
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  
    async session({ session, token }) {
      // Tambahkan properti role ke dalam session
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
