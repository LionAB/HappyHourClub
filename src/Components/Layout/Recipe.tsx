import { Box,Grid,Paper } from "@mui/material";
import DrinkRecipes from "../../Models/DrinkRecipes";


export default function Recipe(props: { recipe:DrinkRecipes | null }) {
        const { recipe } = props;

    return(
        <Box sx={{ flexGrow: 1,
            minWidth:'95vw'}}>
            <div id="recipe" className="ml-11">
                <Grid container spacing={2} columns={12} justifyContent="space-between" flexWrap="wrap-reverse" >
                    <Grid item xs={12} md={7}>
                        <Box className="" sx={{
                            height: '90vh',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          
                        }}>
                            <h2 className="pl-6 text-4xl text-left">Informations</h2>
                            <Paper elevation={3} className=" text-left" sx={{height:'45%',padding:'1rem',margin:'1rem',overflow: "hidden",overflowY: "scroll",backgroundColor:'#f7e4c3'}}>
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
                        <Paper className="bg-violet-600 " sx={{
                            height: '90vh',
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
                                <img className="w-auto h-[450px] rounded-4xl" src={recipe?.image}/>
                            </Box>
                            
                            </Paper>
                    </Grid>
                    </Grid>
                    
                    </div>
                </Box>
    )

}