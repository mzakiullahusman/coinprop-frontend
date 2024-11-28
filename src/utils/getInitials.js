export const getInitials = (firstName, lastName) => {
  const firstInitial = firstName ? firstName.charAt(0) : "";
  const lastInitial = lastName ? lastName.charAt(0) : "";
  return (firstInitial + lastInitial).toUpperCase();
};
