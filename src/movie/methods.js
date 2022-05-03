const Movie = require("./model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    }catch (error){
        console.log(error)
    }
} 

exports.listMovies = async (filterObj) => {
    try {
        const updateResult = await Movie.updateOne(filterObj, updateObj);
        if(updateResult.modifiedCount > 0) {
            console.log("Update successul");
        } else {
            console.log("was not updated")
        }
        } catch (error) {
            console.log(error)
    }
}

exports.deleteMovies = async (filterObj) => {
    try {
        const deleteResult = await Movie.deleteOne(filterObj, updateObj);
        if(deleteResult.modifiedCount > 0) {
            console.log("Sucessfully deleted");
        } else {
            console.log("Unable to delte")
        }
        } catch (error) {
            console.log(error)
    }
}

exports.findMovieTitle = async (movieObj) => {
    try {
        return await Movie.find({ title: movieObj.title})
    } catch (error) {
        console.log(error)
}
}

exports.findActor = async (movieObj) => {
    try {
        return await Movie.find({ title: movieObj.title})
    } catch (error) {
        console.log(error)
}
}


exports.findRating = async (movieObj) => {
    try {
        return await Movie.find({ title: movieObj.title})
    } catch (error) {
        console.log(error)
}
}

function removeUndefinedFromObject(intialObject) {
    const cleanObject = {}
    Object.keys(intialObject).forEach(key => {
        if (intialObject[key] != undefined) {
            cleanObject[key] = initialObject[key]
        }
    });
    return cleanObject;
}