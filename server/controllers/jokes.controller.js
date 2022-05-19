const Joke=require("../models/jokes.model");
const jokesRoutes = require("../routes/jokes.routes");

module.exports.hello=(req,res)=>{
    res.json({msg:"hello jokes"});
}

module.exports.findAllJokes=(req,res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({message:"something went wrong",error:err})
        })
}

module.exports.makeJoke=(req,res)=>{
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results:newJoke})
        })
        .catch(err=>{
            res.json({msg:"something went wrong",error:err})
        })
}

module.exports.findOneJoke=(req,res)=>{
    Joke.findOne({_id: req.params.author})
        .then(joke=>{
            res.json({results:joke})
        })
        .catch(err=>{
            res.json({msg:"something went wrong",error:err})
        })

}

module.exports.updateJoke=(req,res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true,runValidators:true}
    )
    .then(updatedJoke=>{
        res.json({results:updatedJoke})
    })
    .catch(err=>{
        res.json({msg:"something went wrong",error:err})
    })
}

module.exports.removeJoke=(req,res)=>{
    Joke.deleteOne({_id:req.params.id})
    .then(deletedJoke=>{
        res.json({results:deletedJoke})
    })
    .catch(err=>{
        res.json({msg:"something went wrong",error:err})
    })
}