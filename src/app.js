require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const {
	
	addMovie,
	deleteMovie,
	listMovie,
	updateMovie,
	findMovie,
} = require("./movie/methods");

const app = async (yargsObj) => {
	try {
		if (yargsObj.add) {
			
			await addMovie({ title: yargsObj.title, actor: yargsObj.actor,director: yargsObj.director });
			console.log(`${yargsObj.title} has been added`);
			
		} else if (yargsObj.list) {
			
			await listMovie();
			
		} else if (yargsObj.update) {
			
			await updateMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director });
			
		} else if (yargsObj.delete) {
			
			await deleteMovie({ title: yargsObj.title });
			
		} else if (yargsObj.find) {
			
			await findMovie({ title: yargsObj.title });
			
		} else {
			console.log("Incorrect command");
		}
		
		await listMovie();
		
		await mongoose.disconnect();


	} catch (error) {

		
		console.log(error);
		await mongoose.disconnect();
	}
};


app(yargs.argv);
