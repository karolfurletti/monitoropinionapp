import React from "react"
import "./index.module.css"
import styles from "./index.module.css"
import { dateFormat } from "../../../../utils/formatUtils"
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
const CommentsComponet = (props) => {

  const { item } = props

  return (

    <div className={styles.cardComments}>
      <div className={styles.itemTop}>
        <div className={styles.part1}>

          <img className={styles.avatar} src={item.foto} alt="" />

          <div className={styles.title}>
            <div>{item.nome}</div>
            <div>{item.nomeFonte}</div>
          </div>

        </div>
        <div className={styles.part2}>
          {dateFormat(item.dataPublicacao)}
        </div>
      </div>

      <div className={styles.itemBottom}>
        {item.comentario}
      </div>

    </div>
  )
}

export default CommentsComponet
