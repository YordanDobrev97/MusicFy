import React from 'react';
import Async from "react-async";
import ReactPlayer from "react-player";
import { Container, Row } from 'react-bootstrap'

import styles from '../Song/song.module.css'

function Songs(props) {
    const {songs} = props;
    return (
        <div>
            <Async promiseFn={songs}>
              {({ data, err, isLoading }) => {
                if (isLoading) return "Loading...";
                if (err) return `Something went wrong`;
    
                if (data)
                  return (
                    <Container>
                        <Row>
                        {data.map((s) => (
                            <span className={styles["player-wrapper"]}>
                                <ReactPlayer className={styles["react-player"]} url={s.sourceUrl} width='85%' height='90%'/>
                                <span>❤️ {s.likes}</span>
                            </span>
                          ))}
                        </Row>
                      </Container>
                  )
              }}
            </Async>
        </div>
    )
}

export default Songs;