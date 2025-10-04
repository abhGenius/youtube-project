class ApiError extends Error {
    constructor (
        statusCode,
        message = " something went wrong ",
        errors =[],
        stack = ""
    ){
        super(message)
        this.data =null
        this.message =message 
        this.success = false ;
        this.errors= errors


        if (statck){
            this.stack = statcks
        }
        else {
            Error.captureStackTrace( this, this.constructor)
        }
    }
}
export {ApiError}