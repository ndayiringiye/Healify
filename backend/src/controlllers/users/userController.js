import userService from '../services/userService.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const result = await userService.registerUser(req.body, req.user?.id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const result = await userService.verifyOTP(email, otp); // Add this method if needed
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userService.resendOTP(email);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userService.forgotPassword(email);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, token, newPassword } = req.body;
    const result = await userService.resetPassword(email, token, newPassword);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  async getAllUsers(req, res) {
    try {
      const { role, page = 1, limit = 20 } = req.query;
      const users = await userService.getAllUsers(role, parseInt(page), parseInt(limit));

      res.status(200).json({
        success: true,
        count: users.length,
        users
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  // Get Single User
  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json({
        success: true,
        user
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  },

  // Update User
  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  },

  // Deactivate User
   async deactivateUser(req, res) {
    try {
      const user = await userService.deactivateUser(req.params.id);
      res.status(200).json({
        success: true,
        message: 'User deactivated successfully',
        user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  },

  async deleteUser(req, res) {
    try {
      const result = await userService.deleteUser(req.params.id);
      res.status(200).json({
        success: true,
        ...result
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
};