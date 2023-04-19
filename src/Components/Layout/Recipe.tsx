import { Box,Grid,Paper } from "@mui/material";
import DrinkRecipes from "../../Models/DrinkRecipes";


export default function Recipe(props: { recipe:DrinkRecipes | null }) {
        const { recipe } = props;

    return(
        <Box sx={{ flexGrow: 1,
            height:'100%',
            bgcolor: 'background.default',
            color: 'text.primary',
            marginLeft:'3.5rem'}}>
                
            <div id="recipe" className="mr-10">
            <div className="wrapper">
            <img className="logo-home" src="../src/assets/images/Happy-hour-logo-sans-fond.png"/>
          </div>
                <Grid container spacing={2} columns={12} sx={{
                    marginLeft:'auto',
                }} justifyContent="space-between" flexWrap="wrap-reverse" >
                    <Grid item xs={12} md={7}>
                        <Box className="" sx={{
                            height: '90vh',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          
                        }}>
                            <h2 className="pl-6 text-4xl text-left">Informations</h2>
                            <Paper elevation={3} className=" text-left" sx={{height:'45%',padding:'1rem',margin:'1rem',overflow: "hidden",overflowY: "scroll"}}>
                <h3><b>Glass</b></h3>
                {recipe?.glass}
                <h3 className="mt-1 text-left"><b>Ingredients</b></h3>
                <ul className="pl-16 list-disc">
                {recipe?.ingredients.map(
                    (ingredient, index) =>
                        ingredient && <li key={index}>{ingredient}</li>
                )}
                </ul>
                
                    
              </Paper>
                        <h2 className="mt-1  pl-6 text-4xl text-left">Instructions</h2>
                            <Paper elevation={3} className="text-left" sx={{height:'45%',margin:'1rem',overflow: "hidden",overflowY: "scroll",padding:"1rem"
                        }}>{recipe?.instructions}</Paper>
                        </Box>
    
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{paddingTop:'1rem'}}>
                        <Paper elevation={3} sx={{
                            height: '85vh',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',         
                        }}
                        >
                            <h1 className=" mt-16"><b>{recipe?.title}</b></h1>
                            <h3><b>Category : {recipe?.category}</b> </h3>
                            
                            <Box className="mx-auto mt-16" sx={{
                                height: '50%',               
                            }}>
                                <img className="w-auto h-[100%] rounded-4xl" src={recipe?.image}/>
                            </Box>
                            
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
                    
                    </div>
                </Box>
    )

}