
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
import { useDispatch } from 'react-redux';
import { addPokemonToUser } from '../../actions/userpokemon';
import { useSelector } from 'react-redux';



const UserPokemon = (props) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.details)
    const userPokemon = useSelector(state => state.userReducer.userPokemon)


    useEffect(() => {
        
        return () => {
        };
    }, [userPokemon]);


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
        <li key={props.uid} >
            <b>{props.name}</b><br />
            <img src={props.frontImage} onClick={handleClickOpen}></img><br /><br/>
            {`Tier: ${props.tier}`}


            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {`${props.name}`}
                </DialogTitle>
                <DialogContent dividers >
                    <Typography gutterBottom className="dialogue-box" >

                    <img src={props.frontImage} className="dialogue-image"></img>
                    </Typography>
                    <Typography gutterBottom>
                    <div className={`pokemon-dialogue-info`}>
                    <h3>{props.name}</h3>
                    <h3>{`Pokedex #${props.uid}`}</h3>
                    <p className="pokemon-description">{props.description}</p>
                    <p className="pokemon-stat">Attack: {props.attack}</p>
                    <p className="pokemon-stat">Defense: {props.defense}</p>
                    <p className="pokemon-stat">Special Attack: {props.special_attack}</p>
                    <p className="pokemon-stat">Special Defense: {props.special_defense}</p>
                    <p className="pokemon-stat">Speed: {props.speed}</p>
                    <p><b>{props.name}'s Moves</b></p>
                    </div>
                    </Typography>
                    <Typography gutterBottom>

                    </Typography>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </li>

    );
}

export default UserPokemon;
