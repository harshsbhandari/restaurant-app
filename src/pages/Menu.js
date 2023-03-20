import {Card, CardActionArea, CardMedia, Box, CardContent, Typography} from "@mui/material"
import React from "react"
import Layout from "../components/Layout"
import {MenuList} from "../data/data"

function Menu() {
  return (
    <>
      <Layout>
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {MenuList.map((menu) => (
            <Card sx={{maxWidth: "400px", display: "flex", m: 2}}>
              <CardActionArea>
                <CardMedia
                  sx={{minHeight: "400px"}}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"} sx={{fontWeight: "900"}}>
                    {menu.name}
                  </Typography>
                  <Typography variant="h5">{menu.description}</Typography>
                  <Typography variant="h5" sx={{fontWeight: "700"}}>
                    Price : &#x20B9;{menu.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
    </>
  )
}

export default Menu
