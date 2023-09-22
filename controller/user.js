import { User } from "../model/user.js";
import { Parser } from "json2csv";

// ---------------------- Get csv file data-----------

export const getCsv = async (req, res) => {
  try {
    const origin = req.get("Origin");

    console.log("origin: ", origin);

    let users = [];
    const userData = await User.find({});

    let serialNo = 1; // Initialize serial number

    userData.forEach((user) => {
      const { name, mobileNo, email, CreatedAt, domain } = user;

      users.push({
        "Serial No": serialNo++, // Increment serial number
        name: name,
        mobileNo: mobileNo,
        email: email,
        "Registration Date": CreatedAt, // Add registration date
        domain: domain,
      });
    });

    const csvFields = [
      "Serial No",
      "name",
      "mobileNo",
      "email",
      "Registration Date",
      "domain",
    ]; // Include "Registration Date" in the fields

    const json2csvParser = new Parser({ fields: csvFields });
    const csvData = json2csvParser.parse(users);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=usersData.csv"); // Correct typo in "attachment"

    res.status(200).send(csvData);
  } catch (error) {
    res.send({ status: 400, success: false, msg: error.message });
  }
};

// ---------------------register----------------
export const register = async (req, res) => {
  const { name, mobileNo, email } = req.body;
  console.log(req);
  const origin = req.get("Origin");
  console.log("origin: ", origin);
  // Validate the mobileNo length
  if (mobileNo.length !== 10 || !/^\d{10}$/.test(mobileNo)) {
    return res.status(400).json({
      success: false,
      message:
        "Mobile number must be exactly 10 digits long and contain only digits.",
    });
  }

  try {
    let user = await User.findOne({ mobileNo });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // Create a new user
    const newUser = new User({ name, mobileNo, email, domain: origin });
    const saveData = await newUser.save();
    console.log()

    res.status(200).json({ status: true, message: "Registered successfully" });
  } catch (error) {
    console.error("During registration:", error);
    res.status(500).json({
      success: false,
      message: "Error during registration",
    });
  }
};
