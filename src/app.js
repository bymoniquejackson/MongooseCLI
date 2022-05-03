require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require ("yargs");
const { addMovie, deleteMovies, findActor, findRating, findTitle, listMovies, updateMovie } = require("./movie/methods");

const app = async () => {
    try {
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year, rating: yargsObj.rating});
            console.log(`Successfully added ${yargsObj.title}`);
        } else if (yargsObj.list){
            const list = await listMovies({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year, rating: yargsObj.rating})
            console.log(list);
        } else if (yargsObj.update) {
            await updateMovies({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year, rating: yargsObj.rating})
        } else if (yargsObj.delete) {
            await deleteMovies({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year, rating: yargsObj.rating})
        } else if (yargsObj.fing) {
            console.log(await findActor({ title: yargsObj.actor}))
            console.log(await findRating ({ title: yargsObj.rating}))
            console.log(await findTitle ({ title: yargsObj.title}))
        } else {
            console.log("Incorrect command");
    }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        await mongoose.disconnect();
    }
    };

    app(yargs.argy)