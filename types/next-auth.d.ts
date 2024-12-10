import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string; // Tambahkan role di session user
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string; // Tambahkan role di User
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string; // Tambahkan role di JWT
  }
}
