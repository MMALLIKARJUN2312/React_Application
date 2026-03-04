const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>Email: {user.email}</p>

      <p>Phone: {user.phone}</p>

      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;