import { Box } from '@mui/material';

const UserImage = ({ image, size = '60px' }) => {
  console.log(`Image variable from UserImage: ${image}`);
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:5000/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
