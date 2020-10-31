import React from 'react';
import Popover from '@material-ui/core/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

import './style.css'

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

let smilesTable = [
                    ["air_kiss", "bad", "biggrin", "blum1", "blush"],
                    ["bomb", "bye2", "cool", "cray", "crazy"],
                    ["dance", "diablo", "drinks", "gamer", "girl_angel"],
                    ["give_heart", "give_rose", "good", "hang1", "hi"],
                    ["ireful", "i_am_so_happy", "kiss", "kiss3", "lol"],
                    ["mad", "man_in_love", "mocking", "music", "nea"],
                    ["pardon", "rofl", "sad", "scratch_one-s_head", "shok"],
                    ["shout", "smile", "sorry", "unknown", "wacko1"],
                ];

export default function SimplePopover(props) {
    // const = useStyles();


  let renderSmilesTable = () => {
    let listRender = smilesTable.map((itemRow, i) => {
        let itemRowRender = itemRow.map((item, i) => <div key = {i} className="smiles-list-item" onClick = {sendSmile} ><img src = { "http://www.kolobok.us/smiles/icq/" + item + ".gif" } alt = {':' + item + ':'} /></div>)
        return(
            <li key = {i} className="smiles-list-row d-flex justify-content-around">
                { itemRowRender }
            </li>
        )
    })
    return(
        <ul className="smiles-list">
            { listRender }
        </ul>
    )
  }
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendSmile = (e) => {
    const targetItemPath = e.nativeEvent.path;
    let source;
    let alt;
    if (targetItemPath[0].localName == 'div') {
      source = targetItemPath[0].children[0].src
      alt = targetItemPath[0].children[0].alt
    } else {
      source = targetItemPath[0].src
      alt = targetItemPath[0].alt
    }
    props.addSmile(`<img alt =${alt} src = ${ source }>`)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  return (
    <div>
      <button className="chat-input-button smiles-button" onClick={ handleClick }><FontAwesomeIcon icon={faSmile} /></button>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: vh-100, left: vw-200 }}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
      >
          { renderSmilesTable() }
      </Popover>
    </div>
  );
}