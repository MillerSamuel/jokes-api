const jokeController=require("../controllers/jokes.controller");

module.exports=(app)=>{
    app.get("/api/hello",jokeController.hello)
    app.get("/api/alljokes",jokeController.findAllJokes)
    app.post("/api/addjoke",jokeController.makeJoke)
    app.get("/api/joke/:id",jokeController.findOneJoke)
    app.put("/api/updatejoke/:id",jokeController.updateJoke)
    app.delete("/api/deletejoke/:id",jokeController.removeJoke)
}


