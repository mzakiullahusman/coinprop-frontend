import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A80B3",
    },
    secondary: {
      main: "#11152e",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      smm: 767,
      md: 900,
      lg: 1440,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          color: #ffffff;
          font-family: Poppins;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background:
              "linear-gradient(313deg, #2A80B3 11.53%, #6746E1 95.94%)",
          },
        },
        containedGradient: ({ theme }) => ({
          background: "rgba(1, 255, 157, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          width: "100%",
          borderRadius: "12px",
          fontFamily: "'Poppins', 'Arial', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "19.36px",
          textAlign: "center",
          color: "#000000",
          textTransform: "capitalize",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "8px",
          paddingBottom: "8px",
          transition: "background-color 0.3s ease",
          "&:hover": {
            background: "linear-gradient(180deg, #22d3ee 0%, #236191 50%, #142738 100%)",
            color:"#ffffff"
          },
          [theme.breakpoints.up("md")]: {
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "16px",
            paddingBottom: "16px",
            fontSize: "16px",
          },
        }),
        containedGradientAlt: ({ theme }) => ({
          background:
            "linear-gradient(90deg, #5DDB71 0%, #00C07B 20.49%, #00C07B 80.41%, #5DDB71 98.33%);",
          boxShadow: "0px 0px 24px 0px rgba(80, 193, 103, 0.32)",
          width: "100%",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "8px",
          paddingBottom: "8px",
          borderRadius: "12px",
          fontFamily: "'Poppins', 'Arial', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "19.36px",
          textAlign: "center",
          color: "#FFFFFF",
          textTransform: "capitalize",
          [theme.breakpoints.up("md")]: {
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "16px",
            paddingBottom: "16px",
            fontSize: "16px",
          },
        }),
        containedNoGradient: ({ theme }) => ({
          background: "#30373E",
          width: "100%",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "8px",
          paddingBottom: "8px",
          borderRadius: "12px",
          fontFamily: "'Poppins', 'Arial', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "19.36px",
          textAlign: "center",
          color: "#FFFFFF",
          textTransform: "capitalize",
          [theme.breakpoints.up("md")]: {
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "16px",
            paddingBottom: "16px",
            fontSize: "16px",
          },
        }),
        outlinedHighlight: ({ theme }) => ({
          border: "1px solid #2A80B3",
          width: "100%",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "8px",
          paddingBottom: "8px",
          borderRadius: "12px",
          fontFamily: "'Poppins', 'Arial', sans-serif",
          fontSize: {
            xs: "14px",
            md: "16px",
          },
          fontWeight: 400,
          lineHeight: "19.36px",
          textAlign: "center",
          color: "#2A80B3",
          textTransform: "capitalize",
          [theme.breakpoints.up("md")]: {
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "16px",
            paddingBottom: "16px",
            fontSize: "16px",
          },
        }),
        outlinedHighlightGradient: ({ theme }) => ({
          border: "2px solid var(--gradient-blue, #6746E1)",
          borderRadius: "8px",
          boxShadow: "0px 0px 24px 0px rgba(80, 193, 103, 0.32)",
          width: "100%",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "8px",
          paddingBottom: "8px",
          fontFamily: "'Poppins', 'Arial', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "19.36px",
          textAlign: "center",
          color: "#2A80B3",
          textTransform: "capitalize",
          [theme.breakpoints.up("md")]: {
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "16px",
            paddingBottom: "16px",
            fontSize: "16px",
          },
        }),
        containedPrimary: {
          borderRadius: "11.25px",
          background: "#FBAC18",
          color: "#000",
          textAlign: "center",
          fontFamily: "Arial",
          fontSize: "13.5px",
          fontWeight: 500,
          textTransform: "capitalize",
          "&:hover": {
            background: "#4C33E6",
          },
        },
        // full width variant
        containedSecondary: {
          width: "100%",
          borderRadius: "1.25rem",
          background: "#FBAC18",
          color: "#000",
          textAlign: "center",
          fontFamily: "Arial",
          fontSize: "13.5px",
          fontWeight: 500,
          textTransform: "capitalize",
          "&:hover": {
            background: "#4C33E6",
          },
        },
        outlinedPrimary: {
          borderRadius: "11.25px",
          border: "1.5px solid #FBAC18",
          color: "#FFF",
          textAlign: "center",
          fontFamily: "Arial",
          fontSize: "13.5px",
          fontWeight: 500,
          textTransform: "capitalize",
          "&:hover": {
            background: "#4C33E6",
          },
        },
      },
      variants: [
        {
          props: { variant: "artistDetailsOutlined" },
          style: {
            width: "100%",
            borderRadius: 15,
            border: "2px solid #4C33E6",
            color: "#4C33E6",
            fontFamily: "Arial",
            fontSize: "18px",
            fontWeight: 400,
            textTransform: "none",
            "&:hover": {
              background: "#FBAC18",
            },
          },
        },
        {
          props: { variant: "artistDetails" },
          style: {
            width: "100%",
            borderRadius: 15,
            backgroundColor: "#4C33E6",
            color: "#fff",
            fontFamily: "Arial",
            fontSize: "18px",
            fontWeight: 400,
            textTransform: "none",
            "&:hover": {
              background: "#FBAC18",
            },
          },
        },
        {
          props: { variant: "artistHeader" },
          style: {
            border: "1px solid #FBAC18",
            borderRadius: "0.75rem",
            backgroundColor: "#000",
            color: "#FBAC18",
            fontFamily: "Arial",
            fontSize: "1.125rem",
            fontWeight: 400,
            textTransform: "none",
          },
        },
        {
          props: { variant: "headerOutlined" },
          style: {
            border: "1px solid #FBAC18",
            borderRadius: "0.7rem",
            background: "rgba(0, 0, 0, 0.20)",
            backdropFilter: "blur(5.625px)",
            color: "#fff",
            fontFamily: "Arial",
            fontSize: "0.84rem",
            fontWeight: 500,
            textTransform: "none",
            "&:hover": {
              background: "#FBAC18",
            },
          },
        },
        {
          props: { variant: "header" },
          style: {
            borderRadius: "0.75rem",
            backgroundColor: "#FBAC18",
            color: "#000",
            fontFamily: "Arial",
            fontSize: "0.84rem",
            fontWeight: 400,
            textTransform: "none",
            "&:hover": {
              background: "#4C33E6",
            },
          },
        },
        {
          props: { variant: "search" },
          style: {
            borderRadius: 15,
            background: "#4C33E6",
            backdropFilter: "blur(11.25px)",
            color: "#FFF",
            fontFamily: "Arial",
            fontSize: "21px",
            fontWeight: 400,
            textTransform: "capitalize",
            "&:hover": {
              background: "#FBAC18",
            },
          },
        },
        {
          props: { variant: "capsule" },
          style: {
            borderRadius: "18.75px",
            background: "#FBAC18",
            backdropFilter: "blur(11.25px)",
            color: "#FFF",
            fontFamily: "Arial",
            fontSize: "15px",
            fontWeight: 400,
            textTransform: "capitalize",
            "&:hover": {
              background: "#4C33E6",
            },
          },
        },
        {
          props: { variant: "footer" },
          style: {
            color: "#FFF",
            background: "#4C33E6",
            borderRadius: "0.625rem",
            fontFamily: "Arial",
            fontSize: "10.5px",
            fontWeight: 400,
            textTransform: "capitalize",
            lineHeight: "30px",
            "&:hover": {
              background: "#FBAC18",
            },
          },
        },
      ],
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontFamily: "Poppins",
          fontSize: "16px",
          color: "#FFF",
          "&::placeholder": {
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 500,
          },
          "&.Mui-focused::placeholder": {
            color: "#FBAC18",
          },
          "&:hover::placeholder": {
            color: "#4C33E6",
          },
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        "&::placeholder": {
          fontSize: "16px",
          fontFamily: "Poppins",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "4.625rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "Poppins",
      fontSize: "2.53125rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    // faq accordian titles
    h3: {
      fontFamily: "Poppins",
      fontSize: "1.3125rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    // footer headings
    h4: {
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 400,
      // lineHeight: '60px',
      textTransform: "uppercase",
    },
    // "inter" navbar/header
    h5: {
      fontFamily: "Poppins",
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    // "inter" suitable artists
    h6: {
      color: "#7649F6",
      fontFamily: "Poppins",
      fontSize: "0.9375rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    subtitle1: {
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    // h2 subtitle
    subtitle2: {
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "0.9375rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "1.78125rem",
      fontStyle: "normal",
      fontWeight: 400,
      // lineHeight: '40.5px',
    },
    // footer text inter
    body2: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    button: {
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "0.84375rem",
      fontStyle: "normal",
      fontWeight: 500,
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export { responsiveTheme as theme };
