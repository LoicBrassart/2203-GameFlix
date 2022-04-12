import axios from "axios";
import { useState, useEffect } from "react";
import { events } from "../../data";
import SThumbWall from "./style";

export default function ThumbWall() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/games`).then(({ data }) => {
      setGames(data);
    });
  }, []);

  return (
    <SThumbWall>
      <div>
        <div className="card top-left">
          {games[0] && (
            <article>
              <figure>
                <img src={games[0].thumbUrl} alt={games[0].title} />
                <figcaption>{games[0].title}</figcaption>
              </figure>
            </article>
          )}
        </div>
        <div className="card top">
          {games[1] && (
            <article>
              <figure>
                <img src={games[1].thumbUrl} alt={games[1].title} />
                <figcaption>{games[1].title}</figcaption>
              </figure>
            </article>
          )}
        </div>
        <div className="card top-right">
          {games[2] && (
            <article>
              <figure>
                <img src={games[2].thumbUrl} alt={games[2].title} />
                <figcaption>{games[2].title}</figcaption>
              </figure>
            </article>
          )}{" "}
        </div>
        <div className="big card left">
          <article>
            <figure>
              <img src={events[0].picture} alt={events[0].title} />
              <figcaption>{events[0].title}</figcaption>
            </figure>
          </article>
        </div>
        <div className="big card right">
          <article>
            <figure>
              <img src={events[1].picture} alt={events[1].title} />
              <figcaption>{events[1].title}</figcaption>
            </figure>
          </article>
        </div>
        <div className="card bottom">
          {games[3] && (
            <article>
              <figure>
                <img src={games[3].thumbUrl} alt={games[3].title} />
                <figcaption>{games[3].title}</figcaption>
              </figure>
            </article>
          )}
        </div>
        <div className="card bottom-left">
          {games[4] && (
            <article>
              <figure>
                <img src={games[4].thumbUrl} alt={games[4].title} />
                <figcaption>{games[4].title}</figcaption>
              </figure>
            </article>
          )}
        </div>
        <div className="card bottom-right">
          {games[5] && (
            <article>
              <figure>
                <img src={games[5].thumbUrl} alt={games[5].title} />
                <figcaption>{games[5].title}</figcaption>
              </figure>
            </article>
          )}
        </div>
      </div>
    </SThumbWall>
  );
}
