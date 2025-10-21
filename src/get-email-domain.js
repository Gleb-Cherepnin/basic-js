function getEmailDomain(email) {
  if (typeof email !== 'string') return false;
  const parts = email.split('@');
  return parts[parts.length - 1];
}

module.exports = {
  getEmailDomain
};
