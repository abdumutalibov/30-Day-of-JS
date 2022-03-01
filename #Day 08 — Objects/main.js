const users = [{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
},
{
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
},
{
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
},
{
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
},
{
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
}
];

const signUp = (username, email, password) => {
users.forEach(user => {
    if (user.username === username && user.password === password) {
        console.log("you already have an account")
    } else {
        let date = new Date()
        let chars = "abcdefghiklmnopqrstuvwxyz";
        let id = [];
        for (let i = 0; i < 6; i++) {
            id.push(chars[Math.floor(Math.random() * chars.length)])
        }
        id = id.join("");
        users.push({
            _id: id,
            username: username,
            email: email,
            password: password,
            createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
            isLoggedIn: "false"
        })
    }
})
console.log(users[users.length - 1]);
}
signUp()
signUp()
signUp()