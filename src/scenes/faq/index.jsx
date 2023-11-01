import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analyze the form of the Champions League teams · Keep an eye on the
            team news for the Champions League games. · Take into account how
            important the match is.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analyze the form of the Champions League teams · Keep an eye on the
            team news for the Champions League games. · Take into account how
            important the match is.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analyze the form of the Champions League teams · Keep an eye on the
            team news for the Champions League games. · Take into account how
            important the match is.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            some random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analyze the form of the Champions League teams · Keep an eye on the
            team news for the Champions League games. · Take into account how
            important the match is.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final Question Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analyze the form of the Champions League teams · Keep an eye on the
            team news for the Champions League games. · Take into account how
            important the match is.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analyze the form of the Champions League teams · Keep an eye on the
            team news for the Champions League games. · Take into account how
            important the match is.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
