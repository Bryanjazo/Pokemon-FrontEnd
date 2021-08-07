
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
        },
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
        },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(1),
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
                    <div className={`pokemon-dialogue-info`}>
                    <h3>{props.pokemon.name}</h3>
                    <p><b>Attack: {props.pokemon.attack}</b></p>             
                    <p><b>Defense: {props.pokemon.defense}</b></p>
                    <p><b>Special Attack: {props.pokemon.special_attack}</b></p>
                    <p><b>Special Defense: {props.pokemon.special_defense}</b></p>
                    <p><b>Speed: {props.pokemon.speed}</b></p>
                    <select name={`pokemon-${props.pokemon.uid}-moves`}>
                        {props.pokemon.moves.map((m) => <option value={m}>{m}</option> )}
                    </select>
                    <p>{props.pokemon.description}</p>
                    </div>
                    </Typography>
                    <Typography gutterBottom>

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

