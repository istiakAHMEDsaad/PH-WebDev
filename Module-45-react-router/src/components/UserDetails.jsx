import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserDetails = () => {
  const user = useLoaderData();
  const { name, username, email, address, phone, website, company } = user;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <div>
        <p>Address --&gt;</p>
        <p>City: {address.city}</p>
        <p>Street: {address.street}</p>
      </div>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>{company.name}</p>
    </div>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserDetails;
