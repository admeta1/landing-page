import { app } from "./app.js";

import { connectDB } from "./database/user.js";

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });



//   import { User } from "../model/user.js";
// import bcrypt from "bcrypt";
// // import jwt from "jsonwebtoken";
// import { sendCookie } from "../utils/features.js";
// import Excel from "excel4node";
// import XLSX from "xlsx";
// import xlsx from "node-xlsx";
// import ExcelJS from "exceljs";
// import { Parser } from "json2csv";

// import fs from "fs";

// -------------Export User Information to Excel Route-------------

// export const getCsv = async (req, res) => {

//   try {
//     // Create a new Excel workbook and worksheet
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("my Users");

//     // Write header row
//     worksheet.columns = [
//       { header: "S.no", key: "s_no" },
//       { header: "name", key: "name" },
//       { header: "mobile", key: "mobile" }
//     ]

//     let counter = 1;
//     const userData = await User.find({});
//     userData.forEach((user) => {
//       user.s_no = counter;
//       worksheet.addRow(user);
//       counter++;
//     });

//     worksheet.getRow(1).eachCell((cell) => {
//       cell.font = { bold: true };
//     });

//     res.setHeader(
//       "Content-Type",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//     );

//     res.setHeader("Content-Disposition", 'attachment; filename="user.xlsx"');
//     res.status(200);

//     await workbook.xlsx.write(res);
//   } catch (error) {
//     console.log("Internal server error:", error.message);
//     res.status(500).send("Internal server error");
//   }
// };

// ------------------Export user information to an Excel file
// export const getCsv = async (req, res) => {
//   try {
//     const users = await User.find({}, "username email");

//     const data = [["Username", "Email"]];
//     users.forEach((user) => {
//       data.push([user.name, user.mobile]);
//     });

//     console.log(data)

//     const buffer = xlsx.build([{ name: "Users", data }]);

//     const excelFilePath = "users.xlsx";
//     fs.writeFileSync(filePath, buffer);
//     console.log(filePath);
//     res.download(filePath, "users.xlsx", (err) => {
//       if (err) {
//         console.error("Error sending file:", err);
//       } else {
//         // Clean up the file after sending
//         fs.unlinkSync(filePath);
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to export user sww" });
//   }
// };

// // Export user information to an Excel file using excel js

// //

// // ----------------login---------------------

// export const login = async (req, res, next) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email }).select("+password");
//   if (!user)
//     return res.status(404).json({
//       success: false,
//       message: "invalid email or password",
//     });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch)
//     return res.status(404).json({
//       success: false,
//       message: "invalid email or password",
//     });
//   console.log(user.name);
//   sendCookie(user, res, `Welcome  back, $(user.name)`, 200);
// };
// // ---------------------register----------------
// export const register = async (req, res) => {
//   const { name, mobile, email, password } = req.body;
//   // console.log(req.body);

//   let user = await User.findOne({ email });

//   if (user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Already Exist",
//     });
//   }
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     user = await User.create({ email, mobile, name, password: hashedPassword });
//     ge: "register successfully",
//       sendCookie(user, res, "Register successfully", 201);
//   } catch (error) {
//     console.error("During registration:", error);
//     res.status(500).json({
//       success: false,
//       message: "error during registration",
//     });
//   }
// };
// ----------get my profile-------------
// export const getMyProfile = (req, res) => {
//   res.status(200).json({
//     success: true,
//     user: req.user,
//   });
// };
// ------logout----------------

// export const logout = (req, res) => {
//   res
//     .status(200)
//     .cookie("token", "", { expires: new Date(Date.now()) })
//     .json({
//       success: true,
//       user: req.user,
//     });
// };

// ---------------------- Export user information to an Excel file

// export const getCsv = async (req, res) => {
//   try {
//     const users = await User.find({}, 'name mobile');

//     const worksheet = XLSX.utils.json_to_sheet(users);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

//     console.log(workbook);
//     const excelFilePath = 'users.xlsx';
//     XLSX.writeFile(workbook, filePath);
//     res.download(filePath, 'users.xlsx', (err) => {
//       if (err) {
//         console.error('Error sending file:', err);
//       } else {
//         // Clean up the file after sending
//         // fs.unlinkSync(filePath);
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to export users' });
//   }
// };

  
  