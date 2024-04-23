import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

// Middleware to make sure only admin is allowed
export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query;
  if (!id) return next(new ErrorHandler("Please Login", 401));

  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("Invalid User", 401));

  if (user.role !== "admin")
    return next(new ErrorHandler("You are not a admin", 403));

    next() // agar sirf khali next ko call kar rahe hai toh "getAllUser" access kar sakta hai app.get("/all" , adminOnly , getAllUser)


});
