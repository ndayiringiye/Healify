/**
 * Role-based access control middleware
 * @param {...String} allowedRoles - Roles allowed to access the route
 */
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Please login first'
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. Only ${allowedRoles.join(', ')} can access this route.`
      });
    }

    next();
  };
};

export const isManager = authorize('manager');
export const isConsultant = authorize('consultant');
export const isDoctor = authorize('doctor');
export const isNurse = authorize('nurse');
export const isAdmin = authorize('admin');

export const isManagerOrAdmin = authorize('manager', 'admin');
export const isMedicalStaff = authorize('consultant', 'doctor', 'nurse');