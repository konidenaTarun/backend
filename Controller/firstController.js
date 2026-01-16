const getStudents= (req,res) =>{
    let stdData= 
    {
        "name" : "Tarun",
        "Roll" :"1234"
    };
    res.status(200).json({data : stdData});
};

const addstudents=(req ,res) => {
    res.send("Data is add");

    res.status(201) .json ({message : "data" });
};

export {getStudents , addstudents};

