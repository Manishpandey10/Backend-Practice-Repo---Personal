class apiError extends Error {
  constructor(
    statusCode,
    message = "sonething is wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = errors;
    if(stack){
      this.stack=stack
    }
    else{
      Error.captureStackTrace(this, this.constructor
        
      )
    }
  }
}
export {apiError}
