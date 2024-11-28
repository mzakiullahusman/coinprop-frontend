import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import IconToggle from "./IconToggle";

const StyledAccordion = styled(Accordion)({
  backgroundColor: "#11152e",
  border: "1px solid #3d4054",
  borderRadius: "8px",
  boxShadow: "none",
  color: "#ffffff",
  marginBottom: "16px",
  "&:before": {
    display: "none",
  },
});

const faqs = [
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
  {
    question: "How can I get started with Trade Tech Solutions?",
    answer: "Getting started with us is easy. Simply fill out the form on our website. Once submitted, you'll be redirected to a booking page where you can select a convenient time for a consultation. During the consultation, we'll discuss your specific needs and how our solutions can help you achieve your business goals.",
  },
];

const FaqsGrid = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#11152e" }}>
      <Grid container spacing={1}>
        {faqs.map((faq, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StyledAccordion
              expanded={expandedIndex === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<IconToggle expanded={expandedIndex === index} />}
              >
                <p style={{ fontSize: 16 }}>{faq.question}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ fontSize: 14 }}>{faq.answer}</p>
              </AccordionDetails>
            </StyledAccordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FaqsGrid;
