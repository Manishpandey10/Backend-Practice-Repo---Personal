import {apiResponse} from "../utils/apiResponse.js"
// import { apiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
  return res
    .json(new apiResponse(200, "Everyhthing is working, health check allright!"));
});
export {healthCheck}
