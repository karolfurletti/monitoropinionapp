import React from "react"
import "./index.module.css"
import styles from "./index.module.css"
import avatar from "../../../../Assets/UserProfile/avatar.jpg"
import { dateFormat } from "../../../../utils/formatUtils"

const CommentsComponet = (props) => {

  const { item } = props

  return (

    <div className={styles.cardComments}>
      <div className={styles.itemTop}>
        <div className={styles.part1}>

          <img className={styles.avatar} src={avatar} alt="" />

          <div className={styles.title}>
            <div>Atendimento</div>
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
