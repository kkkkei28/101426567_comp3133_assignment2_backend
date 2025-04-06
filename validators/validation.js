const { check, validationResult } = require('express-validator');

// User signup Validation
const validateSignup = [
  check('username').notEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Employee add Validation
const validateAddEmployee = [
  check('first_name').notEmpty().withMessage('First name is required'),
  check('last_name').notEmpty().withMessage('Last name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('designation').notEmpty().withMessage('Designation is required'),
  check('salary').isFloat({ min: 1000 }).withMessage('Salary must be at least 1000'),
  check('date_of_joining').isISO8601().withMessage('Date of joining must be a valid date'),
  check('department').notEmpty().withMessage('Department is required'),
];

// Validate request
const validate = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error(errors.array().map(err => err.msg).join(', '));
  }
};

module.exports = { validateSignup, validateAddEmployee, validate };
