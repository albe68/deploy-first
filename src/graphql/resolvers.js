const users = [
    {
        id: "1",
        name: "Albert",
        email: "albert@example.com"
    },
    {
        id: "2",
        name: "John",
        email: "john@example.com"
    },
    {
        id: "3",
        name: "David",
        email: "david@example.com"
    }
];

export const resolvers = {
    Query: {
        users: () => users,

        user: (_, args) => {
            return users.find(user => user.id === args.id);
        }
    }
};