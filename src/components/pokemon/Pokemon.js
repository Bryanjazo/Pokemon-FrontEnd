
import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const Pokemon = (props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(open)
        return () => {
            console.log(open)
        };
    }, []);


    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        }
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
        },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(1)
        },
    
    }))(MuiDialogActions);


    const handleClickOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        console.log("hi")
        setOpen(!open)
        
    };


    return (
        <li key={props.pokemon.uid} >
            <b>{props.pokemon.name}</b><br />
            <img src={props.pokemon.front_image} onClick={handleClickOpen}></img><br /><br/>
            {`Tier: ${props.pokemon.tier}`}


            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {`${props.pokemon.name}`}
                </DialogTitle>
                <DialogContent dividers >
                    <Typography gutterBottom className="dialogue-box" >
                    
                    <img src={props.pokemon.front_image} className="dialogue-image"></img>
                    </Typography>
                    <Typography gutterBottom>
                    <div className={`pokemon-dialogue-info`}>
                    <h3>{props.pokemon.name}</h3>
                    <h3>{`Pokedex #${props.pokemon.uid}`}</h3> 
                    <p className="pokemon-description">{props.pokemon.description}</p>
                    <p className="pokemon-stat">Attack: {props.pokemon.attack}</p>             
                    <p className="pokemon-stat">Defense: {props.pokemon.defense}</p>
                    <p className="pokemon-stat">Special Attack: {props.pokemon.special_attack}</p>
                    <p className="pokemon-stat">Special Defense: {props.pokemon.special_defense}</p>
                    <p className="pokemon-stat">Speed: {props.pokemon.speed}</p>
                    <p><b>{props.pokemon.name}'s Moves</b></p>
                    <ul className={`pokemon-moves`}>
                        {props.pokemon.moves.map((m) => <li><b>{m.name}</b>{` Power: ${m.power} Type: ${m.pokemon_type}`}</li> )}
                    </ul>
                    </div>
                    </Typography>
                    <Typography gutterBottom>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Buy Pokemon
          </Button>
                </DialogActions>
            </Dialog>
        </li>

    );
}

export default Pokemon;

