import PropTypes from 'prop-types';
import { Paper, Typography, Card, Stack, Button } from '@mui/material';
import { Box, styled } from '@mui/system';
import TelegramActivation from "./authentication/TelegramActivation";

ActivationRequired.propTypes = {
  // searchQuery: PropTypes.string
};

const RootStyle = styled("div")({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-center',
  background: '#FF0000'
});

export default function ActivationRequired() {

  function handleActivate() {
    console.log("TODO")
  }

  return (
    <RootStyle>
      <Card sx={{ color: 'white', display: 'flex', width: '100%', padding: "20px", background: '#027B55' }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack justifyContent="center">Your account is not yet activated. Please confirm activate it here.</Stack>
          <Stack justifyContent="center">
            <Button
              sx={{ width: "150px", mb: "20px" }}
              variant="contained"
              component={Button}
              // disabled={!userCanVote}
              onClick={() => { handleActivate() }}
            >
              Vote
            </Button>
          </Stack>
        </Stack>
      </Card>
      <TelegramActivation /* open={userTelegramActivationOpen} handleActive={handleActive}  */ />
    </RootStyle>
  );
}
