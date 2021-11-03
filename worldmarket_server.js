const express = require('express');
const exhbs = require('express-handlebars');
const path = require('path');
const VIEWS = path.resolve(__dirname, "views");
const LAYOUTS = path.join(VIEWS, "layouts");
const LAYOUTDIR = path.join(VIEWS, "pages");
const DEFAULTLAYOUT = path.join(LAYOUTS, "main");
const app = express();
const PORT = 5700;

app.engine("hbs", exhbs({
    layoutsDir: LAYOUTDIR,
    defaultLayout: DEFAULTLAYOUT,
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.set("views", VIEWS);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    let data = {
        title: "index"
    }
    res.render("pages/index", data);
})

app.get("/inspiration", (req, res) => {
    let data = {
        title: "inspiration"
    }
    res.render("pages/inspiration", data);
})

app.get("/cart", (req, res) => {
    let data = {
        title: "cart"
    }
    res.render("pages/cart", data);
})

app.get("/sign-in", (req, res) => {
    let data = {
        title: "sign_in"
    }
    res.render("pages/sign-in", data);
})

app.listen(PORT);
console.log("App is running on port : " + PORT);