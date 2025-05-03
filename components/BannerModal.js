import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function BannerModal({ open, onClose, banner }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      scroll="body"
      PaperProps={{
        sx: {
          width: isMobile ? "100%" : 680, // custom width closer to md
          borderRadius: 3,
          m: isMobile ? 1 : 3,
          overflow: "hidden",
          p: 0,
        },
      }}
    >
      {/* Image with close button on top */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? 200 : 300,
        }}
      >
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <DialogContent
        sx={{
          p: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          {banner.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {banner.details}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 10,
            py: 1.5,
            fontWeight: 600,
            borderRadius: 1.5,
            fontSize: "0.875rem",
            backgroundColor: "#000",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
          onClick={onClose}
        >
          CONTINUE
        </Button>
      </DialogContent>
    </Dialog>
  );
}
