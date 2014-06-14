/*
mongoutils plan (for my reference):
*should be able to addStudent(name, gender, crushes) to db
*from the list of crushes, need to search the db to see if the names are there and make a new name
*/

conn = new Mongo();
db = conn.getDB("mackDB");

function addStudent(name, gender, crushes) { //name is a string, gender boolean (male true, female false), crushes should be a list
    db.students.insert({"name": name, "gender": gender, "crushes": crushes});
}

