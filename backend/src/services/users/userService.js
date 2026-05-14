import User from '../../models/users/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import otpgenerator from 'otp-generator';
import qrcode from 'qrcode';
import { emailService } from '../../services/emails/emailService.js';

const userService = {

  async createFirstManager(data) {
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      throw new Error('First manager can only be created when no users exist');
    }

    const existingEmail = await User.findOne({ email: data.email });
    if (existingEmail) throw new Error('Email already registered');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const otp = otpgenerator.generate(6, { digits: true });
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const manager = await User.create({
      ...data,
      role: 'manager',
      password: hashedPassword,
      otp,
      otpExpiry,
      isVerified: false,
      isActive: false,
      createdBy: null 
    });

    await emailService.sendOTPEmail(manager.email, otp, manager.fullName);

    const qrCode = await qrcode.toDataURL(`Healify-User:${manager._id}`);
    manager.qrCode = qrCode;
    await manager.save();

    return { 
      message: 'First Manager account created successfully. Please verify OTP.', 
      userId: manager._id 
    };
  },
  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    if (!user.isVerified) throw new Error('Please verify your email first');
    if (!user.isActive) throw new Error('Account is deactivated');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        department: user.department,
        qrCode: user.qrCode
      }
    };
  },

  async registerUser(data, createdById) {
    const existing = await User.findOne({ email: data.email });
    if (existing) throw new Error('Email already registered');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const otp = otpgenerator.generate(6, { digits: true });
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const user = await User.create({
      ...data,
      password: hashedPassword,
      createdBy: createdById,
      otp,
      otpExpiry,
      isVerified: false,
      isActive: false
    });

    await emailService.sendOTPEmail(user.email, otp, user.fullName);

    const qrCode = await qrcode.toDataURL(`Healify-User:${user._id}`);
    user.qrCode = qrCode;
    await user.save();

    return { 
      message: 'User registered successfully. OTP sent to email.', 
      userId: user._id 
    };
  },

  async verifyOTP(email, otp) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    if (user.isVerified) throw new Error('User already verified');

    if (user.otp !== otp || user.otpExpiry < new Date()) {
      throw new Error('Invalid or expired OTP');
    }

    user.isVerified = true;
    user.isActive = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return { message: 'Account verified successfully' };
  },

  async resendOTP(email) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    if (user.isVerified) throw new Error('User already verified');

    const otp = otpgenerator.generate(6, { digits: true });
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    await user.save();
    await emailService.sendResendOTPEmail(user.email, otp, user.fullName);

    return { message: 'OTP resent successfully' };
  },

  async forgotPassword(email) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const resetToken = otpgenerator.generate(6, { digits: true });
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiry = new Date(Date.now() + 15 * 60 * 1000);

    await user.save();
    await emailService.sendResetPasswordEmail(user.email, resetToken, user.fullName);

    return { message: 'Password reset OTP sent to email' };
  },

  async resetPassword(email, token, newPassword) {
    const user = await User.findOne({
      email,
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: new Date() }
    });

    if (!user) throw new Error('Invalid or expired token');

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;
    await user.save();

    return { message: 'Password reset successful' };
  },

  async getAllUsers(role = null, page = 1, limit = 20) {
    const query = role ? { role } : {};
    return await User.find(query)
      .select('-password -otp -resetPasswordToken -resetPasswordExpiry')
      .populate('createdBy', 'fullName role')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  },

  async getUserById(id) {
    const user = await User.findById(id)
      .select('-password -otp -resetPasswordToken -resetPasswordExpiry');
    if (!user) throw new Error('User not found');
    return user;
  },

  async updateUser(id, updateData) {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    const user = await User.findByIdAndUpdate(id, updateData, { new: true })
      .select('-password -otp -resetPasswordToken');
    if (!user) throw new Error('User not found');
    return user;
  },

  async deactivateUser(id) {
    const user = await User.findByIdAndUpdate(id, { isActive: false }, { new: true });
    if (!user) throw new Error('User not found');
    return user;
  },

  async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new Error('User not found');
    return { message: 'User deleted successfully' };
  }
};

export default userService;