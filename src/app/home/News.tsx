import { Newspaper } from "lucide-react";
import style from "./styles.module.css";

const News = () => {
  return (
    <section className="h-full px-6">
      <h1 className="flex items-center gap-3">
        <Newspaper size={35} /> News
      </h1>
      <div className="grid grid-cols-1 gap-4 max-w-100 m-auto">
        <article className={`${style.newsCard} ${style["type-update"]} flex`}>
          <div className={`${style.newContent}`}>
            <h3 className={`${style.newsTitle}`}>
              Patch Notes v2.5 - High Five Update
            </h3>
            <p className={`${style.newsExcerpt}`}>
              New zones added, className balance adjustments and fresh raid
              bosses available.
            </p>
          </div>
          <div className={style.newsDate}>04 JAN</div>
        </article>

        <article className={`${style.newsCard} ${style['type-event']} flex`}>
          <div className={`${style.newContent}`}>
            <h3 className={`${style.newsTitle}`}>Double XP Weekend</h3>
            <p className={`${style.newsExcerpt}`}>
              Join forces and battle for glory! Gain 2x Experience and SP this
              weekend.
            </p>
          </div>
          <div className={style.newsDate}>02 JAN</div>
        </article>

        <article className={`${style.newsCard} ${style['type-maintenance']} flex`}>
          <div className={`${style.newContent}`}>
            <h3 className={`${style.newsTitle}`}>Emergency Maintenance</h3>
            <p className={`${style.newsExcerpt}`}>
              Server will be down for 30 minutes for hardware upgrades and
              stability fixes.
            </p>
          </div>
          <div className={style.newsDate}>01 JAN</div>
        </article>

        <article className={`${style.newsCard} flex`}>
          <div className={`${style.newContent}`}>
            <h3 className={`${style.newsTitle}`}>
              Grand Olympiad Season Start
            </h3>
            <p className={`${style.newsExcerpt}`}>
              Compete in 1vs1 battles to achieve Hero status and wield legendary
              weapons.
            </p>
          </div>
          <div className={style.newsDate}>28 DEC</div>
        </article>
      </div>
    </section>
  );
};

export default News;
