import Student from "../models/student.js";

// export  function getStudents(req,res){
//     Student.find().then(
//         (students)=>{
//             res.json(students);
//         }
//     ).catch(()=>{
        
//         res.json({
//             message:"failed to fetch students"
//         })
        
//     })
// }

export async function getStudents(req,res){
    try{
        const students=await Student.find();
        res.json(students);
    }
    catch(error){
        res.status(500).json({
            message:"failed to fetch students",
            error:error.message
        });
    
    }
}

export function createStudent(req,res){

    if(req.user==null){
        res.status(403).json({
            message:"please login to create a student"
        })
        return
    }

    if(req.user.role!="admin"){
        res.status(403).json({
            message:"please login as admin to create a student"
        })
        return
    }//authorization
    


    const student=new Student({
        name:req.body.name,
        age:req.body.age
    })
    student.save().then(
        ()=>{
            res.json({
                message:"student data saved"
            })
        }
    ).catch(
        ()=>{
            console.log("failed to save data");
        }
    )
}

