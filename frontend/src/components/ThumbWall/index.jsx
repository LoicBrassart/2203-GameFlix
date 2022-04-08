import { events, games } from "../../data";
import SThumbWall from "./style";

export default function ThumbWall() {
  return (
    <SThumbWall>
      <div>
        <div className="card top-left">
          <article>
            <figure>
              <img src={games[0].picture} alt={games[0].title} />
              <figcaption>{games[0].title}</figcaption>
            </figure>
          </article>
        </div>
        <div className="card top">
          <article>
            <figure>
              <img src={games[1].picture} alt={games[1].title} />
              <figcaption>{games[1].title}</figcaption>
            </figure>
          </article>
        </div>
        <div className="card top-right">
          <article>
            <figure>
              <img src={games[2].picture} alt={games[2].title} />
              <figcaption>{games[2].title}</figcaption>
            </figure>
          </article>
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
          <article>
            <figure>
              <img src={games[3].picture} alt={games[3].title} />
              <figcaption>{games[3].title}</figcaption>
            </figure>
          </article>
        </div>
        <div className="card bottom-left">
          <article>
            <figure>
              <img src={games[4].picture} alt={games[4].title} />
              <figcaption>{games[4].title}</figcaption>
            </figure>
          </article>
        </div>
        <div className="card bottom-right">
          <article>
            <figure>
              <img src={games[5].picture} alt={games[5].title} />
              <figcaption>{games[5].title}</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </SThumbWall>
  );
}
