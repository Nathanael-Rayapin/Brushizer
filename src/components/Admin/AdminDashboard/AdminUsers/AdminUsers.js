import './style.scss';
import { Icon } from 'semantic-ui-react';
import DeleteUserModal from '../DeleteUserModal/DeleteUserModal';

const AdminUsers = ({ data, handleDeleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Pseudo</th>
          <th>Country</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr className='user-row' key={index}>
            <td className='user-row-id'>{user.id}</td>
            <td className='user-row-pseudo'>{user.pseudo}</td>
            <td className='user-row-country'>{user.country}</td>
            <td className='user-row-email'>{user.email}</td>
            <td className='user-row-id'>{user.role_id}</td>
            <td className='user-row-options'>
              {/* <Icon className='user-row-options-edit' name="edit" size="small" /> */}
              <DeleteUserModal user={user} handleDeleteUser={handleDeleteUser} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminUsers;
