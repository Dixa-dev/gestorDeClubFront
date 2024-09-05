import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/fondo_club-Beltran.jpg")', 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />
     
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%", 
            paddingTop: "10vh", 
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "75%", 
              color: "white",
              alignItems: "center",
              padding: "2rem",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: "950" }}>
              Bienvenidos a la web de la Coop!!
            </Typography>
            <Typography variant="h4" sx={{ marginTop: "3vh", marginBottom: "5vh" }}>
              Una familia, un club, la misma pasión
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: "1.5vh" }}>
              ¿Sos jugador?
            </Typography>
            <Link to={"/register"}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "green",
                  height: "7vh",
                  width: "10vw",
                  fontSize: "2.5vh",
                }}
              >
                Registrate
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
