const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Employee = require('../models/Employee');

// Validate request
const validate = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error(errors.array().map(err => err.msg).join(', '));
  }
};

module.exports = {
  // User signup
  signup: async ({ username, email, password }, req) => {
    req.body = { username, email, password };
    await check('username').notEmpty().withMessage('Username is required').run(req);
    await check('email').isEmail().withMessage('Valid email is required').run(req);
    await check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').run(req);
    validate(req);

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('User already exists');

    const user = new User({ username, email, password });
    await user.save();
    return { id: user.id, username: user.username, email: user.email };
  },

  // Login
  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { userId: user.id, token };
  },

  // getAllEmployees
  getAllEmployees: async () => {
    return await Employee.find();
  },

  // searchEmployeeByEid
  searchEmployeeByEid: async ({ id }) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid Employee ID');
    }
    return await Employee.findById(id);
  },

// searchEmployeeByDesignationOrDepartment
searchEmployeeByDesignationOrDepartment: async ({ designation, department }) => {
    // Check if either designation or department is provided
    if (!designation && !department) {
      throw new Error('Must provide either designation or department for search');
    }
  
    const query = {};
    if (designation) query.designation = designation;
    if (department) query.department = department;
  
    return await Employee.find(query);
  },
  

  // addEmployee
  addEmployee: async (args, req) => {
    req.body = args;
    await check('first_name').notEmpty().withMessage('First name is required').run(req);
    await check('last_name').notEmpty().withMessage('Last name is required').run(req);
    await check('email').isEmail().withMessage('Valid email is required').run(req);
    await check('designation').notEmpty().withMessage('Designation is required').run(req);
    await check('salary').isFloat({ min: 1000 }).withMessage('Salary must be at least 1000').run(req);
    await check('date_of_joining').isISO8601().withMessage('Date of joining must be a valid date').run(req);
    await check('department').notEmpty().withMessage('Department is required').run(req);
    validate(req);

    const employee = new Employee(args);
    await employee.save();
    return employee;
  },

  // updateEmployee
  updateEmployee: async ({ id, ...updates }, req) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid Employee ID');
    }
    return await Employee.findByIdAndUpdate(id, updates, { new: true });
  },

  // deleteEmployee
  deleteEmployee: async ({ id }) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error('Invalid Employee ID');
    }
    await Employee.findByIdAndDelete(id);
    return `Employee with ID ${id} deleted successfully`;
  }
};
