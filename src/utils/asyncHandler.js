// const asyncHandler =() =>
// {
//     jjj
// }

const asyncHandler = (reqHandler) =>{
    (req,res,next)=>
    {
        Promise.resolve(reqHandler(req,res,next)).catch((err)=>next(err))
    }
}
export {asyncHandler}

// const asyncHandler = (fn) =>async(req,res,next)=> 
// {
//     try {
        
//     } catch (error) {
//         res.status(err.code || 500).json({message:err.message})
//     }   
// }