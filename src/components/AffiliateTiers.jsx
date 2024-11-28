import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, Paper, Modal, IconButton, Grid } from "@mui/material";

import AffTierOne from "../assets/images/aff-badge-tier-1.png";
import AffTierTwo from "../assets/images/aff-badge-tier-2.png";
import AffTierThree from "../assets/images/aff-badge-tier-3.png";
import AffTierFour from "../assets/images/aff-badge-tier-4.png";
import AffTierFive from "../assets/images/aff-badge-tier-5.png";

const Tier = ({
  name,
  color,
  commission,
  referrals,
  description,
  isSupernova,
  index,
}) => {
  const tierImages = [
    AffTierOne,
    AffTierTwo,
    AffTierThree,
    AffTierFour,
    AffTierFive,
  ];
  const tierImage = tierImages[index] || AffTierOne;

  const imageVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 3 },
    tap: { scale: 0.95, rotate: -3 },
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: "12px",
          // height: "360px",
          height: { xs: "450px", md: "360px" },
          backgroundColor: "rgba(200, 200, 200, 0.90)",
        }}
      >
        <Box
          sx={{
            height: isSupernova ? 100 : 70,
            background: `linear-gradient(135deg, silver, ${color}, #d9d9d9, silver)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "h5.fontSize",
            borderRadius: "12px 12px 0 0",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 5s ease infinite",
          }}
        >
          {/* Image with subtle animation */}
          <motion.img
            src={tierImage}
            className="w-[250px]"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </Box>
        <Box p={3} sx={{ mt: "8px" }}>
          <Typography variant="h2" gutterBottom>
            {commission} Commission
          </Typography>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            {referrals} Referral Code Uses
          </Typography>
          <Typography variant="body2" color="text.primary">
            {description}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default function NovaAffiliateTiersModal({ isOpen, onClose }) {
  const tiers = [
    {
      name: "Ignition",
      color: "#4CAF50",
      commission: "10%",
      referrals: "0-10",
      description:
        "You've launched your affiliate journey! Starting from Earth, your mission begins with a solid 10% commission on referrals. As you bring more traders into Nova Funding, you'll ignite the path to greater rewards.",
    },
    {
      name: "Orbital",
      color: "#03A9F4",
      commission: "12%",
      referrals: "11-100",
      description:
        "You've broken through the atmosphere! With 12% commission, you're now in orbit. Continue spreading the word and watch your rewards soar as you guide more traders into the Nova Funding galaxy.",
    },
    {
      name: "Lunar",
      color: "#9E9E9E",
      commission: "15%",
      referrals: "101-500",
      description:
        "You've reached the moon! With 15% commission, your influence grows stronger. The lunar phase marks your progress as a powerful force, but your journey isn't over yet.",
    },
    {
      name: "Stellar",
      color: "#FFC107",
      commission: "18%",
      referrals: "501-999",
      description:
        "You're a star now! At 18% commission, you've reached a stellar level of success. As you blaze through space, the energy from your efforts is undeniable, attracting even more traders to the Nova Funding universe.",
    },
    {
      name: "Supernova",
      color: "#D974F3",
      commission: "20%",
      referrals: "1000+",
      description:
        "You've gone supernova! At the top of the galaxy, your commission caps at a brilliant 20%. Your influence shines across the trading cosmos, with your referrals propelling Nova traders to new heights.",
      isSupernova: true,
    },
  ];

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    maxWidth: 1200,
    maxHeight: "90vh",
    bgcolor: "rgba(21, 27, 25, 0.50)",
    boxShadow: 24,
    overflowY: "auto",
    borderRadius: "12px",
    p: { xs: 3, md: 6 },
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "rgba(21, 27, 25, 0.50)",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: 1,
            borderRadius: "12px",
            borderColor: "divider",
          }}
        >
          <Typography variant="h4" component="h2">
            Nova Affiliate Tiers
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        <Box p={2} sx={{ mt: "20px" }}>
          <Grid container spacing={6}>
            {tiers.map((tier, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={tier.isSupernova ? 12 : 6}
                md={tier.isSupernova ? 12 : 6}
                lg={tier.isSupernova ? 12 : 6}
                xl={tier.isSupernova ? 12 : 6}
              >
                <Tier {...tier} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
