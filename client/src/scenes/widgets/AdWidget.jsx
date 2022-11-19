import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const AdWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography variant="h5" color="dark" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color="medium">Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advertisement"
        src="http://localhost:5000/assets/blueLabel.jpeg"
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />
      <FlexBetween>
        <Typography color={main} fontWeight="500">
          Johnnie Walker
        </Typography>
        <Typography color={medium} fontWeight="500">
          johnniewalker.com
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Johnnie Walker Blue Label: Ann unrivalled masterpiece. It is an exquisite blend
        made from some of Scotland’s rarest and most exceptional whiskies. Only one in
        every ten thousand casks has the elusive quality, character and flavour to deliver
        the’ remarkable signature taste of Johnnie Walker Blue Label. An extraordinary
        whisky for extraordinary occasions.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdWidget;
