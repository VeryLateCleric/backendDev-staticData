const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

// TODO: Return an array of users from /users in form of { data: Array }
app.get("/users", (req, res) => {
    res.json({ data: users });
});

// TODO: Return a single user by id from /users/:userId in form of { data: Object }
app.get("/users/:userId", (req, res, next) => {
    const { userId } = req.params;
    const user = users.find(user => user.id === Number(userId));
    if (user) {
        res.json({ data: user })
    } else {
        next(`User ID not found: ${userId}`);
    }
});

// TODO: Return all states from /states in the form of { data: Array }
app.get("/states", (req, res, next) => {
    res.json({ data: states });
});

// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.get("states/:stateCode", (req, res, next) => {
    const { stateCode } = req.params;
    const stateName = states[stateCode.toUpperCase()];
    if (stateName) {
        res.json({ data: { stateCode: stateCode.toUpperCase(), name: stateName }});
    } else {
        next(`State code not found: ${stateCode}`);
    }
});

// TODO: Add not-found handler.
app.use((req, res, next) => {
    next(`Not found: ${request.originalUrl}`);
});

// TODO: Add error handler.
app.use((error, req, res, next) => {
    console.error(error);
    response.send(error);
})
module.exports = app;
