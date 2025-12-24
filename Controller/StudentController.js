import student from "../models/studentmodels.js";
const getStudentsDetails=(req,res) => {
    const mydata= {
        name : "Tarun",
        roll : "4567"
    };
    res.send(mydata);
};
const addStudents = async(req, res) => {
    try
    {
        const datas = req.body;
        console.log(datas);
        // const addeddatas = await student.create(data);
        const addeddatas = await student.insertMany(datas);

        console.log(addeddatas);
        res.status(201).json("Added data");
    } catch(error) {
        res.status(500).json({error : error.messages})
    }
};
export {getStudentsDetails, addStudents};







// const getStudents= (req,res) =>{
//     let stdData= 
//     {
//         "name" : "Tarun",
//         "Roll" :"1234"
//     };
//     res.status(200).json({data : stdData});
// };

// const addstudents=(req ,res) => {
//     res.send("Data is added");

//     res.status(201) .json ({message : "data" });
// };

// export {getStudents , addstudents};
