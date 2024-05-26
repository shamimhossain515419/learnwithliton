import CredentialsProvider from 'next-auth/providers/credentials';
const authOptions = {
  callbacks: {
    async signIn({ user, account }) {
      return { user, account };
    },
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Enter Email' },
        name: { label: 'name', type: 'text' },
        id: { label: 'ID', type: 'text', placeholder: 'Enter ID' },
      },
      async authorize(credentials) {

        try {
          const user = credentials;

          // Return user object if authentication succeeds, otherwise return null
          return user;
        } catch (error) {
          return { message: 'Invalid credentials' };
        }
      },
    }),
  ],
  secret: 'http://localhost:3000',
};

export default authOptions;
